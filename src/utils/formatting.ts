function formatReadableDate(date: string): string {
  return date.split(" ")[0];
}

function formatPlainDate(date: string): string {
  return formatReadableDate(date).split("/").join("");
}
export { formatReadableDate, formatPlainDate };
