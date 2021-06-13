export function verifyPage(page) {
  return Number.isNaN(Number(page)) ? 1 : Math.ceil(Math.max(Number(page), 1));
}
