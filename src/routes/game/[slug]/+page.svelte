<script lang="ts">
  import type { BoxScore, PlayByPlayItem } from "$types/nbacdn";
  import GamePageHeader from "$components/GamePageHeader.svelte";
  import Boxscore from "$components/boxscore.svelte";
  import GraphContainer from "$components/GraphContainer.svelte";

  interface PageLoadData {
    props: {
      gameId: string;
      boxScore: BoxScore;
      pbp: PlayByPlayItem[];
    };
  }

  export let data: PageLoadData;

  const boxScore = data.props.boxScore;
</script>

<main>
  {#if boxScore}
    <GamePageHeader {boxScore} />
    <Boxscore {boxScore} />
    <GraphContainer />
  {/if}
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
