<script lang="ts">
  import GamePageHeaderArena from "./GamePageHeaderArena.svelte";
  import GamePageHeaderTeam from "./GamePageHeaderTeam.svelte";
  import type { BoxScore } from "$types/nbacdn";

  export let boxScore: BoxScore;
  const { arena, gameTimeHome } = boxScore;
</script>

<div class="flex row container" data-testid="gph-component">
  <GamePageHeaderTeam team={boxScore.homeTeam} />
  <GamePageHeaderArena {arena} {gameTimeHome} />
  <GamePageHeaderTeam team={boxScore.awayTeam} />
</div>

<style lang="scss">
  .container {
    max-width: 80%;
    min-width: 50%;
    justify-content: space-between;
    align-items: center;
  }
</style>
