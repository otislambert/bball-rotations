import type { Params } from "$types/types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }: Params) => {
  const gameId = params.slug;

  return {
    props: {
      gameId,
    },
  };
};
