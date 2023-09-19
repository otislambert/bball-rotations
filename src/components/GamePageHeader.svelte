<script lang="ts">
  import type { BoxScore } from "$types/nbacdn";
  import { format } from "date-fns";

  export let boxScore: BoxScore;
</script>

<div class="container">
  <p>
    {boxScore.arena.arenaCity}, {boxScore.arena.arenaState} - {boxScore.arena
      .arenaName} - {format(
      new Date(boxScore.gameTimeHome),
      "MM/dd/yyyy hh:mm"
    )}
  </p>

  <div class="teamsContainer">
    <div class="team">
      <span class="score">{boxScore.awayTeam.score}</span>
      <span class="name"
        >{boxScore.awayTeam.teamCity} {boxScore.awayTeam.teamName}</span
      >
    </div>
    <span> - </span>
    <div class="team">
      <span class="score">{boxScore.homeTeam.score}</span>
      <span class="name"
        >{boxScore.homeTeam.teamCity} {boxScore.awayTeam.teamName}</span
      >
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;

    p {
      margin: 0;
      padding: 0;
      line-height: 1em;
    }

    .teamsContainer {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      min-width: 50%;

      .team {
        display: flex;
        flex-direction: column;
        align-items: center;

        .score {
          font-size: 8em;
          font-weight: bold;
        }
      }
    }
  }
</style>
