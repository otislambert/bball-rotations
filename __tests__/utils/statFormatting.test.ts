import {
  formatMinutes,
  getMinutes,
  getSeconds,
  format2dec,
  formatPercentage,
} from "$lib/statFormatting.ts";

describe("format2dec", () => {
  it("returns a number", () => {
    expect(format2dec(0.45454545454545503)).not.toBeNaN();
  });
  it("is no longer than 2 decimal points", () => {
    const string = format2dec(0.2133123319) + "";
    expect(string.length).toBeLessThanOrEqual(4);
  });
  it("throws an error if a string is given", () => {
    expect(() => format2dec("hello")).toThrow();
  });
  it("has the same first three digits", () => {
    // intentionally not testing the last digit due to rounding.
    const start = 0.2190448109;
    const end = format2dec(start);

    const startArray = start.toString().split("");
    const endArray = end.toString().split("");

    for (let i = 0; i < endArray.length - 1; i++) {
      expect(startArray[i]).toBe(endArray[i]);
    }
  });
  it("returns the correct number", () => {
    expect(format2dec(0.21405)).toBe(0.21);
    expect(format2dec(0.9102938)).toBe(0.91);
    expect(format2dec(0.998)).toBe(1);
    expect(format2dec(1.3109)).toBe(1.31);
    expect(format2dec(1.99)).toBe(1.99);
    expect(format2dec(1.998)).toBe(2);
  });
});

describe("formatPercentage", () => {
  it("returns a string", () => {
    const formatted = formatPercentage(0.2141);
    expectTypeOf(formatted).toMatchTypeOf<string>();
  });
  it("ends with a '%'", () => {
    const formatted = formatPercentage(0.2141);
    const l = formatted.length;

    expect(formatted[l - 1]).toBe("%");
  });
  it("starts with a number", () => {
    const formatted = formatPercentage(0.23131);
    const s = formatted.split("%")[0];

    expect(Number(s)).not.toBeNaN();
  });
  it("matches a percentage regex", () => {
    expect(formatPercentage(0.5)).toMatch(/[0-9]+%/);
    expect(formatPercentage(0.55)).toMatch(/[0-9]+%/);
    expect(formatPercentage(0.98)).toMatch(/[0-9]+%/);
  });
  it("throws an error when a string is given", () => {
    expect(() => formatPercentage("testing")).toThrow();
  });
  it("throws an error when a number higher than 1 is given", () => {
    expect(() => formatPercentage(1.5)).toThrow();
  });
  it("returns the correct percentage", () => {
    expect(formatPercentage(0.223)).toBe("22%");
    expect(formatPercentage(0.889)).toBe("89%");
    expect(formatPercentage(0.5)).toBe("50%");
  });
});

describe("getMinutes", () => {
  it("returns a string value", () => {
    expectTypeOf(getMinutes("PT26M50.00S")).toMatchTypeOf<string>();
  });
  it("matches the regex", () => {
    expect(getMinutes("PT26M50.00S")).toMatch(/[0-9]/);
  });
  it("has the correct numbers", () => {
    expect(getMinutes("PT26M50.00S")).toBe("26");
  });
});

describe("getSeconds", () => {
  it("returns a string value", () => {
    expectTypeOf(getSeconds("PT26M50.00S")).toMatchTypeOf<string>();
  });
  it("matches the regex", () => {
    expect(getSeconds("PT26M50.00S")).toMatch(/[0-9]/);
  });
  it("has the correct numbers", () => {
    expect(getSeconds("PT26M50.00S")).toBe("50");
  });
});

describe("formatMinutes", () => {
  it("returns a string value", () => {
    expectTypeOf(formatMinutes("PT26M50.00S")).toMatchTypeOf<string>();
  });
  it("matches the regex", () => {
    expect(formatMinutes("PT26M50.00S")).toMatch(/[0-9]+:[0-9]+/);
  });
  it("returns the correct value", () => {
    expect(formatMinutes("PT26M50.00S")).toBe("26:50");
  });
});
