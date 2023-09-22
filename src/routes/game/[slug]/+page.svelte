<script lang="ts">
  import type { BoxScore } from "$types/nbacdn";
  import GamePageHeader from "$components/GamePageHeader.svelte";
  import Boxscore from "$components/boxscore.svelte";

  interface PageLoadData {
    props: {
      gameId: string;
      boxScore: BoxScore;
    };
  }

  export let data: PageLoadData;

  const boxScore = data.props.boxScore;
</script>

<main>
  {#if boxScore}
    <GamePageHeader {boxScore} />
    <Boxscore {boxScore} />
  {/if}
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
