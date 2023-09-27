import { writable } from "svelte/store";
import { SortValues } from "$types/enums";
import type { GPOData } from "$types/types";

export const initialOptions: GPOData = {
  sort: SortValues.default,
  asc: true,
  showInactive: false,
  expanded: false,
};

function createGPOStore() {
  const { subscribe, set, update } = writable<GPOData>(initialOptions);

  const setSort = (val: SortValues) => {
    update((n) => {
      n.sort = val;
      return n;
    });
  };

  const setAsc = () => {
    update((n) => {
      n.asc = !n.asc;
      return n;
    });
  };

  const setShowInactive = () => {
    update((n) => {
      n.showInactive = !n.showInactive;
      return n;
    });
  };

  const setExpanded = () => {
    update((n) => {
      n.expanded = !n.expanded;
      return n;
    })
  };

  const reset = () => {
    set({
      sort: SortValues.default,
      asc: true,
      showInactive: false,
      expanded: false,
    });
  };

  return {
    subscribe,
    setSort,
    setAsc,
    setShowInactive,
    setExpanded,
    reset,
  };
};

export const gamePageOptions = createGPOStore();
