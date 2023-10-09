<script lang="ts">
  import type { PlayByPlayItem } from "$types/nbacdn";
  import { getGameTimeTotal } from "$lib/parsePBP";

  // TODO: parse play by play stats
  export let pbp: PlayByPlayItem[];

  const totSecs = getGameTimeTotal(pbp);
</script>

<div data-testid="gc-root-container" class="root-container">
  <div data-testid="gc-head-container" class="head">
    <h2 data-testid="gc-head-text">Rotations</h2>
    <div class="flex row">
      <p>{totSecs}</p>
    </div>
  </div>
</div>
