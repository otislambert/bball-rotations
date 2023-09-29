<script lang="ts">
  // Imports
  import { sortPlayers } from "$lib/boxscoreParsing";
  import { formatMinutes, formatPercentage } from "$lib/statFormatting";
  import { SortValues } from "$types/enums";
  import type { Team } from "$types/nbacdn";
  import { gamePageOptions } from "../stores/gamePageOptions";

  // Props
  export let team: Team;

  $: players = sortPlayers(
    team.players!,
    $gamePageOptions.sort,
    $gamePageOptions.expanded
  );
</script>

<div data-testid="bs-team-component" class="flex column container">
  <div class="header">
    <h3 data-testid="bs-team-header-text">
      {team.teamCity}
      {team.teamName} - {team.score}
    </h3>
  </div>
  <div class="table-container">
    <table data-testid="bs-team-table">
      <thead data-testid="bs-team-table-head">
        <tr data-testid="bs-team-table-head-row">
          <th on:click={() => gamePageOptions.setSort(SortValues.default)}
            >Name</th
          >
          <th>Minutes</th>
          <th on:click={() => gamePageOptions.setSort(SortValues.points)}
            >Points</th
          >
          <th>Steals</th>
          <th>Blocks</th>
          <th>tRb</th>
          <th>oRb</th>
          <th>dRb</th>
          <th>FG</th>
          <th>FGA</th>
          <th>FG%</th>
          <th>3P</th>
          <th>3PA</th>
          <th>3P%</th>
        </tr>
      </thead>
      <tbody data-testid="bs-team-table-body">
        {#each players as player}
          <!-- TODO: handle players with no minutes -->
          <!-- TODO add sorting functionality -->
          <tr data-testid="bs-player-row">
            <td class="bs-player-name">{player.nameI}</td>
            <td data-testid="bs-player-minutes"
              >{formatMinutes(player.statistics.minutes)}</td
            >
            <td>{player.statistics.points}</td>
            <td>{player.statistics.steals}</td>
            <td>{player.statistics.blocks}</td>
            <td>{player.statistics.reboundsTotal}</td>
            <td>{player.statistics.reboundsOffensive}</td>
            <td>{player.statistics.reboundsDefensive}</td>
            <td>{player.statistics.fieldGoalsMade}</td>
            <td>{player.statistics.fieldGoalsAttempted}</td>
            <td>{formatPercentage(player.statistics.fieldGoalsPercentage)}</td>
            <td>{player.statistics.threePointersMade}</td>
            <td>{player.statistics.threePointersAttempted}</td>
            <td
              >{formatPercentage(player.statistics.threePointersPercentage)}</td
            >
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <!-- TODO: add animations when expanding box score -->
</div>

<style lang="scss">
  .header {
    h3 {
      font-weight: 400;
      text-align: right;
    }
  }

  .table-container {
    width: auto;
    height: auto;

    table {
      width: 100%;

      td,
      th {
        text-align: right;
      }

      .bs-player-name {
        width: 10%;
      }
    }
  }
</style>
