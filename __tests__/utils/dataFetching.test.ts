import { fetchSchedule, fetchBoxScore } from '$lib/server/nbaDataFetching.ts';
import { Boxscore, Schedule } from '$types/nbacdn'

describe("fetch schedule", () => {
  let result;
  beforeEach(async () => {
    result = await fetchSchedule();
  })
  it("fetches something", async () => {
    expect(result).toBeDefined();
  });

  it("fetches a schedule", async () => {
    expectTypeOf(result).toEqualTypeOf<Schedule>();
  });
});

describe("fetch box score", () => {
  let result;

  beforeEach(async () => {
    result = await fetchBoxScore("0022200052");
  });

  it("fetches an object", async () => {
    expect(result).toBeDefined();
  });

  it("fetches a box score", async () => {
    expectTypeOf(result).toEqualTypeOf<Boxscore>();
  });
});
