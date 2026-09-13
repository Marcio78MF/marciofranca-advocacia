import { describe, expect, it } from "vitest";
import { metaText } from "./seo";

describe("metaText", () => {
  it("mantém textos que já cabem no limite", () => {
    expect(metaText("Título curto", 60)).toBe("Título curto");
  });

  it("encurta em limite de palavra", () => {
    const result = metaText(
      "Um título jurídico excessivamente longo para aparecer por inteiro na pesquisa",
      40
    );
    expect(result.length).toBeLessThanOrEqual(40);
    expect(result.endsWith("…")).toBe(true);
  });
});
