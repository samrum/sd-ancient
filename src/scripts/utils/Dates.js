export function formatTimestamp(timestamp) {
  const date = new Date(timestamp * 1000);

  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;

  return `${month}/${date.getDate()}/${date.getFullYear() % 1000}`;
}
