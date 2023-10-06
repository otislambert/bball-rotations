<script lang="ts">
  // imports
  import BoxscoreTeam from "./boxscoreTeam.svelte";
  import type { BoxScore } from "$types/nbacdn";
  import GamePageSettings from "./GamePageSettings.svelte";

  // props
  export let boxScore: BoxScore;

  // destructures teams from boxscore
  const { awayTeam, homeTeam } = boxScore;
</script>

<div data-testid="bs-component" class="flex column container">
  <div class="header">
    <h2 data-testid="bs-header-text">Stats</h2>
  </div>
  <!-- TODO: move settings to side -->
  <GamePageSettings />
  <div class="flex column boxscores">
    <BoxscoreTeam team={awayTeam} />
    <BoxscoreTeam team={homeTeam} />
  </div>
</div>

<style lang="scss">
  .container {
    border: 2px solid black;
    border-radius: 10px;
    padding: 2em;
    margin: 1em;
    min-width: 80%;
    gap: 1em;

    .header {
      width: 100%;
      text-align: center;

      h2 {
        line-height: 1em;
        margin: 0;
        font-size: 2em;
      }
    }

    .boxscores {
      gap: 0em;
    }
  }
</style>
