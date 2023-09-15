import "@testing-library/jest-dom";
import { formatGameDate } from "../../src/utils/formatting";

describe("formatGameDate", () => {
  it("returns a value", () => {
    const test = formatGameDate("10/04/23 00:00:00");
    expect(test).toBeDefined();
  });

  it("returns the correct string", () => {
    const test = formatGameDate("10/04/23 00:00:00");
    expect(test).toEqual("10/04/23");
  });

  it("Doesn't return the time", () => {
    const test = formatGameDate("10/04/23 00:00:00");
    expect(test).not.toContain("00:00:00");
  });
});