<script lang="ts">
  import GameCardTeam from "./GameCardTeam.svelte";
  import type { ScheduleGame } from "$types/nbacdn";

  export let game: ScheduleGame;

  // TODO: check gameStatusText - consider using gameStatus instead.

  const { awayTeam, homeTeam, gameStatusText } = game;
</script>

<button
  class="ele"
  data-testid="gamecardComponent"
  disabled={gameStatusText !== "Final"}
>
  <GameCardTeam team={awayTeam} />
  <p>VS.</p>
  <GameCardTeam team={homeTeam} />
</button>

<style lang="scss">
  .ele {
    background-color: inherit;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    padding: 0 1em;
    border: 2px solid black;
    border-radius: 5px;
    transition: 200ms ease-in-out;
    cursor: pointer;

    &:hover {
      color: orange;
      border-color: orange;
    }

    &:disabled {
      cursor: auto;
      color: gray;
      border-color: gray;
    }
  }
</style>
