import { parseURLDate } from "$lib/parsing";
import { fetchSchedule } from "$lib/server/nbaDataFetching";
import type { GameDate } from "$types/nbacdn";

// TODO: fix Params types
import type { Params } from "$types/types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }: Params) => {
  const date = parseURLDate(params.slug);

  const schedule = await fetchSchedule();
  const games = schedule.gameDates.find(
    (d: GameDate) => d.gameDate == date
  )?.games;

  return {
    props: {
      date,
      games,
    },
  };
};
