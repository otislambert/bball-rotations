<script lang="ts">
  import type { LeagueSchedule } from "../types/nbacdn";

  export let schedule: LeagueSchedule;

  const dates = schedule.gameDates;
</script>

<div data-testid="scheduleComponent">
  <h2>Schedule</h2>
  <div class="dateList" data-testid="dateList">
    {#each dates as date}
      <button class="gameDate" data-testid="gameDate"
        >{date.gameDate.split(" ")[0]}</button
      >
    {/each}
  </div>
</div>

<style lang="scss">
  .dateList {
    display: flex;
    flex-direction: row;
    gap: 1em;
    flex-wrap: wrap;

    .gameDate {
      border: 2px solid black;
      font-weight: 600;
      border-radius: 5px;
      padding: 0.5em;
      transition: 200ms ease-in-out;
    }

    .gameDate:hover {
      border-color: orange;
      color: orange;
      background-color: inherit;
    }
  }
</style>
