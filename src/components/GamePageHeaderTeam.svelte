<script lang="ts">
  import type { Team } from "$types/nbacdn";

  export let team: Team;
</script>

<div class="flex column team" data-testid="gph-team-component">
  <span data-testid="gph-team-score" class="score">{team.score}</span>
  <span data-testid="gph-team-name" class="name"
    >{team.teamCity} {team.teamName}</span
  >
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
</style>
