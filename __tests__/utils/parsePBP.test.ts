import { getGameTimeTotal } from "../../src/lib/parsePBP";
import pbp from "../../__mocks__/data/pbp0052";

describe("get total seconds", () => {
  let res = getGameTimeTotal(pbp);

  beforeEach(() => {
    res = getGameTimeTotal(pbp);
  });

  it("returns a result", () => {
    expect(res).toBeDefined();
  });
  it("returns a number", () => {
    expectTypeOf(res).toEqualTypeOf<number>();
  });
  it("returns the correct result", () => {
    expect(res).toBe(2880);
  })
})

