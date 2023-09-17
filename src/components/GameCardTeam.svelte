<script lang="ts">
  import "../styles/global.scss";
  import type { Team } from "../types/nbacdn";

  export let team: Team;
</script>

<div class="container" data-testid="teamContainer">
  <h2 data-testid="teamScore">{team.score}</h2>
  <p data-testid="teamCity">{team.teamCity}</p>
  <h3 data-testid="teamName">{team.teamName}</h3>
  <p class="light winLoss" data-testid="teamWinLoss">
    {team.wins} - {team.losses}
  </p>
</div>

<style lang="scss">
  .container {
    padding: 1em 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    p,
    h3 {
      margin: 0;
      padding: 0;
    }

    p {
      &.winLoss {
        margin-top: 0.5em;
      }
    }
  }
</style>
