import {
  formatReadableDate,
  formatPlainDate,
  createGameDateURL,
} from "$lib/dateFormatting.ts";

describe("formatGameDate", () => {
  it("returns a value", () => {
    const test = formatReadableDate("10/04/23 00:00:00");
    expect(test).toBeDefined();
  });

  it("returns the correct string", () => {
    const test = formatReadableDate("10/04/23 00:00:00");
    expect(test).toEqual("10/04/23");
  });

  it("Doesn't contain the time", () => {
    const test = formatReadableDate("10/04/23 00:00:00");
    expect(test).not.toContain("00:00:00");
  });
});

describe("formatReadableDate", () => {
  it("renurns a value", () => {
    const test = formatPlainDate("10/04/23 00:00:00");
    expect(test).toBeDefined();
  });

  it("returns the correct value", () => {
    const test = formatPlainDate("10/04/23 00:00:00");
    expect(test).toBe("100423");
  });

  it("Doesn't contain the time", () => {
    const test = formatPlainDate("10/04/23 00:00:00");
    expect(test).not.toContain("00:00:00");
  });
});

describe("createGameDateURL", () => {
  it("Returns a value", () => {
    const test = createGameDateURL("10/04/2023 00:00:00");
    expect(test).toBeDefined();
  });
  it("Returns the correct URL", () => {
    const test = createGameDateURL("10/04/2023 00:00:00");
    expect(test).toBe("/gamedate/10042023");
  });
  it("Doesn't contain the time", () => {
    const test = createGameDateURL("10/04/2023 00:00:00");
    expect(test).not.toContain("00:00:00");
  });
});
