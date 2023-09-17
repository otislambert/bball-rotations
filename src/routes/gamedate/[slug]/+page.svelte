<script lang="ts">
  // TODO: add +layout.svelte page
  import "../../../styles/global.scss";
  import type { PageData } from "./$types";
  import { formatReadableDate } from "../../../utils/formatting";
  import GameCard from "../../../components/GameCard.svelte";

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
