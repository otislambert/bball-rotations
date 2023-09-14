<script lang="ts">
  import { fetchSchedule } from "../utils/nbaDataFetching";
  import { onMount } from "svelte";

  let schedule;

  onMount(() => {
    const s = fetchSchedule();

    schedule = s;
  });
</script>

<div>Schedule</div>
<div />
