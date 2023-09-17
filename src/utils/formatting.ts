// TODO: move utils to `/lib` folder

function formatReadableDate(date: string): string {
  return date.split(" ")[0];
}

function formatPlainDate(date: string): string {
  return formatReadableDate(date).split("/").join("");
}

function createGameDateURL(date: string): string {
  return "/gamedate/" + formatPlainDate(date);
}

export { formatReadableDate, formatPlainDate, createGameDateURL };
