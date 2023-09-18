import { parseURLDate } from "../../../utils/parsing";
import { fetchSchedule } from "../../../utils/nbaDataFetching";

// TODO: fix Params types
import type { Params } from "../../../types/types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }: Params) => {
  const date = parseURLDate(params.slug);

  const schedule = await fetchSchedule();
  const games = schedule.gameDates.find((d) => d.gameDate == date)?.games;

  return {
    props: {
      date,
      games,
    },
  };
};
