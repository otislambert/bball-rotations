import { getTotalSeconds } from "$lib/statParsing";

describe("Get Total Seconds", () => {
  const list = [
    { "s": "PT21M46.00S", "v": 1306 },
    { "s": "PT41M01.00S", "v": 2461 },
    { "s": "PT55M14.00S", "v": 3314 },
    { "s": "PT21M35.00S", "v": 1295 },
    { "s": "PT36M38.00S", "v": 2198 },
    { "s": "PT34M56.00S", "v": 2096 },
    { "s": "PT04M35.00S", "v": 275 },
    { "s": "PT04M31.00S", "v": 271 },
    { "s": "PT21M05.00S", "v": 1265 },
    { "s": "PT57M40.00S", "v": 3460 }
  ];

  // ensures that a value is returned.
  it("returns a value", () => {
    expect(getTotalSeconds("PT33M03.00S")).toBeDefined();
  });

  // checks that it is the correct value.
  it.skip("returns the correct value", () => {
    list.forEach(item => {
      //console.log(item);
      expect(getTotalSeconds(item.s)).toBe(item.v);
    });
  });

  // tests for string filtering
  it("throws an error when given the wrong format", () => {
    expect(() => getTotalSeconds("P02M00.00S")).toThrow();
    expect(() => getTotalSeconds("PT0202M00.00S")).toThrow();
    expect(() => getTotalSeconds("PT02M72.00S")).toThrow();
    expect(() => getTotalSeconds("PT02M22.00300S")).toThrow();
  });
});
