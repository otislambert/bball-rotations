import { getMinutes, getSeconds } from "$lib/statFormatting";

function getTotalSeconds(minutes: string): number {
  const regex = /PT[0-6][0-9]M[0-6][0-9].[0-9]{2}S/

  if (!minutes.match(regex)) throw new Error("Invalid string");

  const m = Number(getMinutes(minutes));
  const s = Number(getSeconds(minutes));

  return (m * 60) + s;
}

export { getTotalSeconds }
