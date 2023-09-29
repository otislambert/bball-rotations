<!-- Game Page Settings -->

<script lang="ts">
  import { gamePageOptions } from "../stores/gamePageOptions";

  $: expanded = $gamePageOptions.expanded;
  $: showDNPs = $gamePageOptions.showInactive;
</script>

<!-- TODO: create tests for game page settings -->

<div data-testid="bs-settings-container" class="flex row settings">
  <label>
    <span data-testid="bs-settings-expanded-text">Show More</span>
    <input
      data-testid="bs-settings-expanded-box"
      type="checkbox"
      bind:checked={expanded}
      on:click={() => {
        gamePageOptions.setExpanded();
      }}
    />
  </label>
  <label>
    <span data-testid="bs-settings-dnp-text">Show DNPs</span>
    <input
      data-testid="bs-settings-dnp-box"
      type="checkbox"
      bind:checked={showDNPs}
      disabled={!expanded}
      on:click={() => {
        gamePageOptions.setShowInactive();
      }}
    />
  </label>
</div>

<style lang="scss"></style>
