<script lang="ts">
  import type { Arena } from "$types/nbacdn";
  import { formatLongDate } from "$lib/dateFormatting";
  export let arena: Arena;
  export let gameTimeHome: string;
</script>

<div data-testid="gph-arena-component" class="flex column arena">
  <div class="location flex column">
    <span class="city" data-testid="gph-arena-city">
      {arena.arenaCity}, {arena.arenaState}
    </span>
    <span class="name" data-testid="gph-arena-name">{arena.arenaName} </span>
  </div>
  <span class="date" data-testid="gph-arena-date">
    {formatLongDate(gameTimeHome)}
  </span>
</div>

<style lang="scss">
  .arena {
    margin: 2em;
    align-items: center;
    gap: 1em;
    border: 1px solid black;
    border-radius: 10px;
    padding: 1em;

    .location {
      gap: 0.25em;
      align-items: center;

      .city {
        font-size: 1.25em;
      }
      .name {
        font-weight: 300;
        font-size: 0.75em;
      }
    }
  }
</style>
