import { parseURLDate } from "../../src/utils/parsing";

describe("parseUrlDate", () => {
  it("Throws an error if a string has less than eight characters", () => {
    expect(() => parseURLDate("0234")).toThrowError();
  });
});
