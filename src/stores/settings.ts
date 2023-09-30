import { writable } from "svelte/store";
import { SortValues } from "$types/enums";

const sortMethod = writable<SortValues>(SortValues.default);
const showDNPs = writable<boolean>(false);
const expanded = writable<boolean>(false);

export { sortMethod, showDNPs, expanded };
