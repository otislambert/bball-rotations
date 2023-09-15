import { fetchSchedule } from "../utils/nbaDataFetching";

export const load = async () => {
  const schedule = await fetchSchedule();

  return { schedule };
};
