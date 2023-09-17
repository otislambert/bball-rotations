<script lang="ts">
  // TODO: add +layout.svelte page
  import "../../../styles/global.scss";
  import type { PageData } from "./$types";
  import { formatReadableDate } from "../../../utils/formatting";

  export let data: PageData;

  const { date, games } = data.props;
  console.log(games);
</script>

<div>
  <h2>{formatReadableDate(date)}</h2>
</div>
