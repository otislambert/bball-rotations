import { fetchSchedule } from "$lib/server/nbaDataFetching";

export const load = async () => {
  const schedule = await fetchSchedule();

  return { schedule };
};
