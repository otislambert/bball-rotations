<script lang="ts">
  import Schedule from "$components/Schedule.svelte";
  import type { LeagueSchedule } from "$types/nbacdn";

  interface PageData {
    schedule: LeagueSchedule;
  }

  export let data: PageData;

  const schedule = data.schedule;
</script>

<div>
  <a href="/game/0022200052">View a completed game.</a>
</div>
<Schedule {schedule} />
