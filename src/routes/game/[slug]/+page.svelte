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

  const { gameId, boxScore } = data.props;
</script>

{#if boxScore}
  <GamePageHeader {boxScore} />
{/if}

<style lang="scss"></style>
