function format2dec(n: number): Number {
  return Number(n.toFixed(2));
}

function formatPercentage(n: number): String {
  if (n > 1) throw new Error("n must be lower than 1");

  return Number(Number(format2dec(n)) * 100).toFixed() + "%";
}

export { format2dec, formatPercentage };
