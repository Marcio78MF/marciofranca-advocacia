import { describe, expect, it } from "vitest";
import { formatDatePtBr } from "./date";

describe("formatDatePtBr", () => {
  it("preserva o dia civil em fusos negativos", () => {
    process.env.TZ = "America/Rio_Branco";
    expect(formatDatePtBr("2026-01-15")).toContain("15");
  });
});
