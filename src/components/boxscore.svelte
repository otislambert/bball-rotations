<script lang="ts">
  // imports
  import BoxscoreTeam from "./boxscoreTeam.svelte";
  import type { BoxScore } from "$types/nbacdn";
  import { gamePageOptions } from "../stores/gamePageOptions";

  // props
  export let boxScore: BoxScore;

  // destructures teams from boxscore
  const { awayTeam, homeTeam } = boxScore;
</script>

<div data-testid="bs-component" class="flex column container">
  <div class="header">
    <h2 data-testid="bs-header-text">Boxscore</h2>
  </div>
  <!-- TODO: move settings to its own component -->
  <div class="settings">
    <label for="expanded">
      Show All
      <input
        type="checkbox"
        bind:checked={$gamePageOptions.expanded}
        on:click={(e) => {
          e.preventDefault();

          gamePageOptions.setExpanded();
        }}
      />
    </label>
    <label for="DNPs">
      Show DNPs
      <input
        type="checkbox"
        bind:checked={$gamePageOptions.showInactive}
        on:click={(e) => {
          e.preventDefault();

          gamePageOptions.setShowInactive();
        }}
      />
    </label>
  </div>
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
      gap: 3em;
    }
  }
</style>
