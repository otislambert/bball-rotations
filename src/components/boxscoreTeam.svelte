<script lang="ts">
  import { getActivePlayers } from "$lib/boxscoreParsing";
  import type { Team } from "$types/nbacdn";

  export let team: Team;

  const activePlayers = getActivePlayers(team.players!);
</script>

<div data-testid="bs-team-component" class="flex column container">
  <div class="header">
    <h3 data-testid="bs-team-header-text">
      {team.teamCity}
      {team.teamName} - {team.score}
    </h3>
  </div>
  <div data-testid="bs-team-table" class="table">
    <div class="flex row header-line" data-testid="bs-table-header">
      <p>Name</p>
    </div>
    {#each activePlayers as player}
      <div class="flex row player-line">
        <p class="name">{player.nameI}</p>
        <p class="points">{player.statistics.points}</p>
        <p class="minutes">{player.statistics.minutes}</p>
        <p class="steals">{player.statistics.steals}</p>
        <p class="blocks">{player.statistics.blocks}</p>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .header {
    h3 {
      font-weight: 400;
    }
  }

  .table {
    border: 1px solid black;

    .header-line {
      border-bottom: 2px solid black;

      p {
        margin: 0;
        line-height: 1.5em;
        font-weight: bold;
      }
    }

    .player-line {
      height: 1em;
      border-bottom: 1px solid gray;
      justify-content: space-between;

      p {
        font-size: 0.95em;
        line-height: 1em;
        margin-top: 0.05em;
      }
    }
  }
</style>
