<script lang="ts">
  import "../styles/global.scss";
  import type { LeagueSchedule } from "../types/nbacdn";
  import Schedule from "../components/Schedule.svelte";

  interface PageData {
    schedule: LeagueSchedule;
  }

  export let data: PageData;

  const schedule = data.schedule;
</script>

<Schedule {schedule} />
