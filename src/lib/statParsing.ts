import { getMinutes, getSeconds } from "$lib/statFormatting.ts";

function getTotalSeconds(minutes: string): number {
  const m = Number(getMinutes(minutes));
  const s = Number(getSeconds(minutes));
  
  return (m * 60) + s;
}

export { getTotalSeconds }
