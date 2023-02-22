export function truncate(str: string, n: number, useWordBoundary: number) {
  if (str.length <= n) {
    return str;
  }
  const subString = str.slice(0, n - 1); // the original check
  return useWordBoundary
    ? subString.slice(0, subString.lastIndexOf(" "))
    : subString + "......";
}
