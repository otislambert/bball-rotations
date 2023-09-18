import { parseURLDate } from "../../src/utils/parsing";

describe("parseUrlDate", () => {
  it("Throws an error if a string has less than eight characters", () => {
    expect(() => parseURLDate("0234")).toThrowError();
  });
  it("Throws an error if a string has more than eight characters", () => {
    expect(() => parseURLDate("02340828291841203")).toThrowError();
  });
  it("Throws an error if a string has non-numericals", () => {
    expect(() => parseURLDate("20a0234a")).toThrowError();
  });
  it("Returns a value", () => {
    expect(parseURLDate("01052024")).toBeDefined();
  });
  it("Returns a date", () => {
    expect(parseURLDate("01052024")).toMatch(/\d\d\/\d\d\/\d\d\d\d/);
  });
  it("Returns the exact date and time", () => {
    expect(parseURLDate("01052024")).toBe("01/05/2024 00:00:00");
  });
});
