function format2dec(n: number): Number {
  return Number(n.toFixed(2));
}

function formatPercentage(n: number): String {
  if (n > 1) throw new Error("n must be lower than 1");

  return Number(Number(format2dec(n)) * 100).toFixed() + "%";
}

function getMinutes(m: string): String {
  return m.slice(2, 4);
}

function getSeconds(m: string): String {
  return m.slice(5, 7);
}

function formatMinutes(m: string): String {
  const min = getMinutes(m);
  const sec = getSeconds(m);

  return min + ":" + sec;
}

export { getMinutes, getSeconds, format2dec, formatPercentage, formatMinutes };
