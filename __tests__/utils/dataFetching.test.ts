import { fetchSchedule } from '$lib/server/nbaDataFetching.ts';

describe("fetch schedule", () => {
  it("fetches something", async () => {
    const result = await fetchSchedule();
    expect(result).toBeDefined();
  });

  it.todo("fetches a schedule", () => {
    // TODO: add schedule
  });
});

// TODO: create fetch box score tests
