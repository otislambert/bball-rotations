<script lang="ts">
  import "$styles/global.scss";
  import Schedule from "$components/Schedule.svelte";
  import type { LeagueSchedule } from "$types/nbacdn";

  interface PageData {
    schedule: LeagueSchedule;
  }

  export let data: PageData;

  const schedule = data.schedule;
</script>

<Schedule {schedule} />
