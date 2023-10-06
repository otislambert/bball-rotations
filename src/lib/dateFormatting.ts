import { format } from "date-fns";

function formatReadableDate(date: string): string {
  return date.split(" ")[0];
}

function formatPlainDate(date: string): string {
  return formatReadableDate(date).split("/").join("");
}

function formatLongDate(date: string): string {
  return format(new Date(date), "h:mm a - MMMM do, y");
}

function createGameDateURL(date: string): string {
  return "/gamedate/" + formatPlainDate(date);
}

export {
  formatReadableDate,
  formatPlainDate,
  createGameDateURL,
  formatLongDate,
};
