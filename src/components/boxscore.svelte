<script lang="ts">
  import BoxscoreTeam from "./boxscoreTeam.svelte";
  import type { BoxScore } from "$types/nbacdn";

  export let boxScore: BoxScore;

  const { awayTeam, homeTeam } = boxScore;
</script>

<div data-testid="bs-component" class="flex column container">
  <div class="header">
    <h2 data-testid="bs-header-text">Boxscore</h2>
  </div>
  <BoxscoreTeam team={awayTeam} />
  <BoxscoreTeam team={homeTeam} />
</div>

<style lang="scss">
  .container {
    border: 2px solid black;
    border-radius: 10px;
    padding: 2em;
    margin: 1em;
    min-width: 80%;

    .header {
      width: 100%;
      text-align: center;

      h2 {
        line-height: 1em;
        margin: 0;
        font-weight: 200;
        font-size: 2em;
      }
    }
  }
</style>
