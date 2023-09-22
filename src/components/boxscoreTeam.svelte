<script lang="ts">
  // Imports
  import { getActivePlayers } from "$lib/boxscoreParsing";
  import { formatPercentage, formatMinutes } from "$lib/statFormatting";
  import type { Team } from "$types/nbacdn";

  // Props
  export let team: Team;

  // Component State
  let expanded: boolean = false;

  // Defines active players list.
  const activePlayers = getActivePlayers(team.players!);

  $: visiblePlayers = expanded ? activePlayers : activePlayers.slice(0, 5);
</script>

<!-- TODO: hide/shrink boxscore -->

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
          <th>Name</th>
          <th>Minutes</th>
          <th>Points</th>
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
        {#each visiblePlayers as player}
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
  <!-- TODO: add tests for expand button -->
  <button
    class="expand-btn"
    data-testid="bs-team-expand-btn"
    on:click={() => (expanded = !expanded)}
    >{expanded ? "Hide" : "Expand"}</button
  >
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

  .expand-btn {
    background-color: inherit;
    font-size: 1.5em;
    font-weight: 600;
    transition: 200ms ease-in-out;
    border: 2px solid black;
    border-radius: 10px;
    width: fit-content;
    align-self: center;

    &:hover {
      color: orange;
      border-color: orange;
      transform: scale(1.1);
    }
  }
</style>
