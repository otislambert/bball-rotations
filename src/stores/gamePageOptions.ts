import { writable } from "svelte/store";
import { SortValues } from "$types/enums";
import type { GPOData } from "$types/types";

export const initialOptions = {
  sort: SortValues.default,
  asc: true,
  showInactive: false,
};

function createGPOStore() {
  const { subscribe, update } = writable<GPOData>(initialOptions);

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

  return {
    subscribe,
    setSort,
    setAsc,
    setShowInactive,
  };
}

export const gamePageOptions = createGPOStore();
