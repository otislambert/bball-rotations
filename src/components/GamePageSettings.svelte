<!-- Game Page Settings -->

<script lang="ts">
  import { SortValues } from "$types/enums";
  import { sortMethod, expanded, showDNPs, ascending } from "$stores/settings";
</script>

<!-- TODO: create tests for game page settings -->

<div data-testid="bs-settings-container" class="flex row settings">
  <label data-testid="bs-settings-expanded-label">
    <span data-testid="bs-settings-expanded-text">Show More</span>
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
  <label data-testid="bs-settings-ascending-label">
    <span data-testid="bs-settings-ascending-text">Ascending</span>
    <input
      data-testid="bs-settings-ascending-box"
      type="checkbox"
      bind:checked={$ascending}
    />
  </label>
  <label data-testid="bs-settings-sort-label">
    <span>Sort by: </span>
    <select data-testid="bs-settings-sort-select" bind:value={$sortMethod}>
      <option value={SortValues.default}>Default</option>
      <option value={SortValues.minutes}>Minutes</option>
      <option value={SortValues.points}>Points</option>
      <option value={SortValues.steals}>Steals</option>
      <option value={SortValues.blocks}>Blocks</option>
      <option value={SortValues.trb}>Rebounds</option>
      <option value={SortValues.orb}>Rebounds (offensive)</option>
      <option value={SortValues.drb}>Rebounds (defensive)</option>
      <option value={SortValues.fg}>Field Goals</option>
      <option value={SortValues.fga}>Attempted Field Goals</option>
      <option value={SortValues.fgp}>Field Goal Percentage</option>
      <option value={SortValues.tp}>Three Pointers</option>
      <option value={SortValues.tpa}>Three Point Attempts</option>
      <option value={SortValues.tpp}>Three Point Percentage</option>
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
