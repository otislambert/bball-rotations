<!-- Game Page Settings -->

<script lang="ts">
  import { SortValues } from "$types/enums";
  import { gamePageOptions } from "../stores/gamePageOptions";

  $: expanded = $gamePageOptions.expanded;
  $: showDNPs = $gamePageOptions.showInactive;
  $: sort = $gamePageOptions.sort;
</script>

<!-- TODO: create tests for game page settings -->

<div data-testid="bs-settings-container" class="flex row settings">
  <label data-testid="bs-settings-expanded-label">
    <span data-testid="bs-settings-expanded-text">Show More</span>
    <!-- TODO: remove on:click statement -->
    <input
      data-testid="bs-settings-expanded-box"
      type="checkbox"
      bind:checked={expanded}
      on:click={() => {
        gamePageOptions.setExpanded();
      }}
    />
  </label>
  <label data-testid="bs-settings-dnp-label">
    <span data-testid="bs-settings-dnp-text">Show DNPs</span>
    <input
      data-testid="bs-settings-dnp-box"
      type="checkbox"
      bind:checked={$gamePageOptions.showInactive}
      disabled={!expanded}
    />
  </label>
  <label data-testid="bs-settings-sort-label">
    <span>Sort by: </span>
    <select
      data-testid="bs-settings-sort-select"
      value={$gamePageOptions.sort}
      on:change={(e) => {
        gamePageOptions.setSort(SortValues[e.currentTarget.value]);
      }}
    >
      <option value={SortValues.default}>Default</option>
      <option value={SortValues.minutes}>Minutes</option>
      <option value={SortValues.points}>Points</option>
      <!-- TODO: add additional options -->
    </select>
  </label>
</div>

<style lang="scss">
  .settings {
    justify-content: space-around;
    width: fit-content;
    gap: 1em;
  }
</style>
