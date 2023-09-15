import "@testing-library/jest-dom";
import {
  formatReadableDate,
  formatPlainDate,
} from "../../src/utils/formatting";

describe("formatGameDate", () => {
  it("returns a value", () => {
    const test = formatReadableDate("10/04/23 00:00:00");
    expect(test).toBeDefined();
  });

  it("returns the correct string", () => {
    const test = formatReadableDate("10/04/23 00:00:00");
    expect(test).toEqual("10/04/23");
  });

  it("Doesn't return the time", () => {
    const test = formatReadableDate("10/04/23 00:00:00");
    expect(test).not.toContain("00:00:00");
  });
});

describe("formatReadableDate", () => {
  it("returns a value", () => {
    const test = formatPlainDate("10/04/23 00:00:00");
    expect(test).toBeDefined();
  });

  it("returns the correct value", () => {
    const test = formatPlainDate("10/04/23 00:00:00");
    expect(test).toBe("100423");
  });

  it("Doesn't return the time", () => {
    const test = formatPlainDate("10/04/23 00:00:00");
    expect(test).not.toContain("00:00:00");
  });
});
