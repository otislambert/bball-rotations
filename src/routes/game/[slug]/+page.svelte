<script lang="ts">
  import type { BoxScore } from "$types/nbacdn";
  import GamePageHeader from "$components/GamePageHeader.svelte";

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
  {/if}
</main>

<style lang="scss">
  main {
    display: flex;
    justify-content: center;
  }
</style>
