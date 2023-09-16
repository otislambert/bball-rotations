function parseURLDate(date: string): string {
  if (date.length != 8) {
    throw new Error("Unsupported Date Format");
  }
}

export { parseURLDate };
