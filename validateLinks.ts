import { exec } from "node:child_process";

import { readFile } from "node:fs/promises";
import { parse, type ParseResult } from "./parse.js";
import path, { dirname, normalize } from "node:path/posix";
import { isAbsolute } from "node:path";

type ParsedFile = ParseResult & { readonly filename: string };

const findAllFilesInGit = async (): Promise<string[]> => {
  return await new Promise((resolve, reject) => {
    exec("git ls-files -z", (error, stdout, stderr) => {
      if (error) reject(error);
      if (stderr)
        reject(new Error(`git ls-files outputted on stderr: ${stderr}`));
      else resolve(stdout.split("\0").filter(Boolean));
    });
  });
};

const findMarkdownFiles = (files: string[]): string[] => {
  const ignorePattern = /^(README|LICENSE|contributing\/)/;
  return files.filter(
    (f) => f.toLocaleLowerCase().endsWith(".md") && !ignorePattern.test(f),
  );
};

const scanForLinks = async (filenames: string[]): Promise<ParsedFile[]> => {
  return Promise.all(
    filenames.map(async (filename) => {
      const content = await readFile(filename, "utf-8");
      return { filename, ...parse(content) };
    }),
  );
};

const externalLinkPattern = /^\w+:/;
const isExternalLink = (t: string) => externalLinkPattern.test(t);

const main = async () => {
  const gitFiles = await findAllFilesInGit();

  // For now, we assume that there are no case clashes
  const lowercaseGitFiles = gitFiles.map((s) => s.toLocaleLowerCase());

  const markdownFilenames = findMarkdownFiles(gitFiles);
  const parsedFiles = await scanForLinks(markdownFilenames);

  let errors = 0;

  for (const parsedFile of parsedFiles) {
    for (const img of parsedFile.images) {
      if (!isExternalLink(img.src)) {
        const resolved = path.join(dirname(parsedFile.filename), img.src);

        const exists = lowercaseGitFiles.includes(resolved.toLocaleLowerCase());

        if (!exists) {
          console.log(
            `error BROKEN-INTERNAL-IMAGE ${parsedFile.filename}:0 Broken internal image reference ${img.src}`,
          );
          ++errors;
        }
      }
    }

    for (const link of parsedFile.links) {
      if (link.target.startsWith("#")) {
        // Already checked by the linter
        continue;
      }

      if (!isExternalLink(link.target)) {
        const target = link.target.split("#")[0];
        let resolved: string;

        if (isAbsolute(target)) {
          resolved = normalize(`./${target}`);
        } else {
          resolved = normalize(path.join(dirname(parsedFile.filename), target));
        }

        const isFile = lowercaseGitFiles.includes(resolved.toLocaleLowerCase());

        const resolvedWithTrailingSlash = resolved.endsWith("/")
          ? resolved.toLocaleLowerCase()
          : `${resolved.toLocaleLowerCase()}/`;
        const isDirectory = lowercaseGitFiles.some((s) =>
          s.startsWith(resolvedWithTrailingSlash),
        );

        if (!isFile && !isDirectory) {
          console.log(
            `error BROKEN-INTERNAL-LINK ${parsedFile.filename}:0 Link target does not exist: ${target}`,
          );
          ++errors;
        }
      }
    }
  }

  if (errors > 0) process.exit(1);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
