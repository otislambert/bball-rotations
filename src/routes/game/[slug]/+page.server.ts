import { fetchPlayByPlay, fetchBoxScore } from "$lib/server/nbaDataFetching";
import type { Params } from "$types/types";
import type { PageServerLoad } from "./$types";

// TODO: add tests for load function
export const load: PageServerLoad = async ({ params }: Params) => {
  const gameId = params.slug;
  const boxScore = await fetchBoxScore(gameId);
  const pbp = await fetchPlayByPlay(gameId);

  return {
    props: {
      gameId,
      boxScore,
      pbp,
    },
  };
};
