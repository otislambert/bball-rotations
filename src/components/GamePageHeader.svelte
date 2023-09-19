<script lang="ts">
  import type { BoxScore } from "$types/nbacdn";
  import { format } from "date-fns";

  export let boxScore: BoxScore;
</script>

<div class="container">
  <div class="team">
    <span class="score">{boxScore.awayTeam.score}</span>
    <span class="name"
      >{boxScore.awayTeam.teamCity} {boxScore.awayTeam.teamName}</span
    >
  </div>
  <div class="arena flex column">
    <span>
      {boxScore.arena.arenaCity}, {boxScore.arena.arenaState}
    </span>
    <span>{boxScore.arena.arenaName} </span><span
      >{format(new Date(boxScore.gameTimeHome), "MM/dd/yyyy hh:mm")}
    </span>
  </div>
  <div class="team">
    <span class="score">{boxScore.homeTeam.score}</span>
    <span class="name"
      >{boxScore.homeTeam.teamCity} {boxScore.awayTeam.teamName}</span
    >
  </div>
</div>

<style lang="scss">
  .container {
    margin: 1em 0;
    display: flex;
    flex-direction: row;
    gap: 1em;
    align-items: center;
    justify-content: space-around;

    span {
      margin: 0;
      padding: 0;
      line-height: 1em;
    }

    .team {
      display: flex;
      flex-direction: column;
      align-items: center;

      .score {
        font-size: 8em;
        font-weight: bold;
      }
    }

    .arena {
      align-items: center;
      gap: 1em;
    }
  }
</style>
