import mit from "markdown-it";
import type { Token } from "markdown-it/index.js";
import {
  markUpContent,
  sourceLocationOf,
  unMarkUpContent,
  type SourceLocation,
} from "./sourceLocation.js";

export type ParsedLink = {
  readonly target: string;
  readonly content: string;
  readonly sourceLocation: SourceLocation | null;
};

export type ParsedImage = {
  readonly src: string;
  readonly alt: string;
  readonly sourceLocation: SourceLocation | null;
};

export type ParseResult = {
  readonly links: readonly ParsedLink[];
  readonly images: readonly ParsedImage[];
  readonly trailingWhitespace: readonly SourceLocation[];
};

export const parse = (content: string): ParseResult => {
  const trailingWhitespace: SourceLocation[] = [];

  content.split(/\n/).forEach((line, index) => {
    if (line.endsWith(" ")) {
      trailingWhitespace.push({
        line0: index,
        column0: line.trimEnd().length,
      });
    }
  });

  const parser = mit();
  const tokens = parser.parse(markUpContent(content), {});

  const parsedLinks: ParsedLink[] = [];
  const parsedImages: ParsedImage[] = [];

  const scan = (tokens: Token[]) => {
    tokens.forEach((token, index) => {
      if (token.type === "link_open") {
        const indexOfNextClose = tokens.findIndex(
          (t2, i2) => i2 > index && t2.type === "link_close",
        );

        if (indexOfNextClose > index) {
          const markedUpTarget = token.attrGet("href") as string;
          parsedLinks.push({
            target: unMarkUpContent(markedUpTarget),
            content: tokens
              .slice(index + 1, indexOfNextClose)
              .map((t) => unMarkUpContent(t.content))
              .join(""),
            sourceLocation: sourceLocationOf(markedUpTarget),
          });
        }
      }

      if (token.type === "image") {
        const markedUpSrc = token.attrGet("src") as string;
        parsedImages.push({
          src: unMarkUpContent(markedUpSrc),
          alt: unMarkUpContent(token.content),
          sourceLocation: sourceLocationOf(markedUpSrc),
        });
      }

      if (token.children) scan(token.children);
    });
  };

  scan(tokens);

  return {
    links: parsedLinks,
    images: parsedImages,
    trailingWhitespace,
  };
};
