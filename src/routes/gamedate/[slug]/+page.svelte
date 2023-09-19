<script lang="ts">
  // TODO: add +layout.svelte page
  import type { PageData } from "./$types";
  import GameCard from "../../../components/GameCard.svelte";
  import { formatReadableDate } from "$lib/formatting";

  export let data: PageData;

  const { date, games } = data.props;
</script>

<div>
  <h2>{formatReadableDate(date)}</h2>
  {#if games && games.length > 0}
    <div class="gamesList">
      {#each games as game}
        <GameCard {game} />
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  .gamesList {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1em;
  }
</style>
