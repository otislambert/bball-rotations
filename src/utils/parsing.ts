function parseURLDate(date: string): string {
  if (!/^[0-9]{8}$/.test(date)) {
    throw new Error("Unsupported Date Format");
  }

  const m = date.slice(0, 2);
  const d = date.slice(2, 4);
  const y = date.slice(4);

  return m + "/" + d + "/" + y + " 00:00:00";
}

export { parseURLDate };
