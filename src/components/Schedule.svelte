<script lang="ts">
  import type { LeagueSchedule } from "../types/nbacdn";
  import { formatReadableDate, createGameDateURL } from "../utils/formatting";

  export let schedule: LeagueSchedule;

  const dates = schedule.gameDates;
</script>

<div data-testid="scheduleComponent">
  <h2>Schedule</h2>
  <div class="dateList" data-testid="dateList">
    {#each dates as date}
      <a
        href={createGameDateURL(date.gameDate)}
        class="gameDate"
        data-testid="gameDate">{formatReadableDate(date.gameDate)}</a
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
      color: inherit;
      text-decoration: none;
    }

    .gameDate:hover {
      border-color: orange;
      color: orange;
      background-color: inherit;
    }
  }
</style>
