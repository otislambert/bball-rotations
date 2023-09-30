<!-- Game Page Settings -->

<script lang="ts">
  import { SortValues } from "$types/enums";
  import { sortMethod, expanded, showDNPs } from "$stores/settings";
</script>

<!-- TODO: create tests for game page settings -->

<div data-testid="bs-settings-container" class="flex row settings">
  <label data-testid="bs-settings-expanded-label">
    <span data-testid="bs-settings-expanded-text">Show More</span>
    <!-- TODO: remove on:click statement -->
    <input
      data-testid="bs-settings-expanded-box"
      type="checkbox"
      bind:checked={$expanded}
    />
  </label>
  <label data-testid="bs-settings-dnp-label">
    <span data-testid="bs-settings-dnp-text">Show DNPs</span>
    <input
      data-testid="bs-settings-dnp-box"
      type="checkbox"
      bind:checked={$showDNPs}
      disabled={!expanded}
    />
  </label>
  <label data-testid="bs-settings-sort-label">
    <span>Sort by: </span>
    <select data-testid="bs-settings-sort-select" bind:value={$sortMethod}>
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
