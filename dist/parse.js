import mit from "markdown-it";
import { sourceLocationOf } from "./sourceLocation.js";
export const parse = (content) => {
    const parser = mit();
    const tokens = parser.parse(content, {});
    const parsedLinks = [];
    const parsedImages = [];
    const scan = (tokens) => {
        tokens.forEach((token, index) => {
            if (token.type === "link_open") {
                const indexOfNextClose = tokens.findIndex((t2, i2) => i2 > index && t2.type === "link_close");
                if (indexOfNextClose > index) {
                    const target = token.attrGet("href");
                    parsedLinks.push({
                        target,
                        content: tokens
                            .slice(index + 1, indexOfNextClose)
                            .map((t) => t.content)
                            .join(""),
                        sourceLocation: sourceLocationOf(`(${target})`, content),
                    });
                }
            }
            if (token.type === "image") {
                const src = token.attrGet("src");
                parsedImages.push({
                    src,
                    alt: token.content,
                    sourceLocation: sourceLocationOf(`(${src})`, content),
                });
            }
            if (token.children)
                scan(token.children);
        });
    };
    scan(tokens);
    return {
        links: parsedLinks,
        images: parsedImages,
    };
};
