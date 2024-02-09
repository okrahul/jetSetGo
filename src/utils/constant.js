export function formatDate(inputDate) {
  const dateParts = inputDate.split("T")[0].split("-");
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];

  return `${day}/${month}/${year}`;
}

export function formatDateTime(inputDateTime) {
  const dateTimeParts = inputDateTime.split("T");
  const dateParts = dateTimeParts[0].split("-");
  const timeParts = dateTimeParts[1].split(":");

  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];

  const hours = timeParts[0];
  const minutes = timeParts[1];

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}
