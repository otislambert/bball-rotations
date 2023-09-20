<script lang="ts">
  import type { Team } from "$types/nbacdn";

  export let team: Team;
</script>

<div class="flex column" data-testid="gph-team-container">
  <div class="flex column team" data-testid="gph-team-component">
    <span data-testid="gph-team-score" class="score">{team.score}</span>
    <span data-testid="gph-team-name" class="name"
      >{team.teamCity} {team.teamName}</span
    >
  </div>

  <div class="flex row stats-container" data-testid="gph-team-stats-container">
    {#if team.statistics?.trueShootingPercentage}
      <div data-testid="gph-team-stats-ts" class="stat">
        <span class="label">True Shooting</span>
        <span class="value"
          >{Number(team.statistics.trueShootingPercentage.toFixed(2)) *
            100}%</span
        >
      </div>
    {/if}

    {#if team.statistics?.steals}
      <div class="stat" data-testid="gph-team-stats-steals">
        <span class="label">Steals</span>
        <span class="value">{team.statistics?.steals}</span>
      </div>
    {/if}

    {#if team.statistics?.fieldGoalsAttempted}
      <div class="stat" data-testid="gph-team-stats-fga">
        <span class="label">Shot Attempts</span>
        <span class="value">{team.statistics?.fieldGoalsAttempted}</span>
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .team {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      line-height: 1em;
    }

    .name {
      font-size: 1.5em;
      font-weight: bold;
      border-bottom: 2px solid black;
    }

    .score {
      font-size: 8em;
      font-weight: bold;
    }
  }
  .stats-container {
    display: flex;
    flex-direction: row;
    gap: 2em;
    margin: 1em;
    justify-content: center;

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;

      .label {
        font-weight: light;
        font-size: 0.75em;
      }

      .value {
        font-size: 2em;
        line-height: 1em;
      }
    }
  }
</style>
