import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { SimpleMarkdown } from "./SimpleMarkdown";

describe("SimpleMarkdown", () => {
  it("renderiza títulos, listas, destaques e links internos", () => {
    const html = renderToStaticMarkup(
      <SimpleMarkdown>{`## Título

Texto com **destaque**.

- Item
- [Artigo](/blog/artigo)`}</SimpleMarkdown>
    );

    expect(html).toContain("<h2>Título</h2>");
    expect(html).toContain("<strong>destaque</strong>");
    expect(html).toContain("<ul>");
    expect(html).toContain('href="/blog/artigo"');
  });
});
