// This file contains the helper function that converts Linux timestamp into
// an object of year, month, day, hour, minute.

export default function convertTime(timestamp) {
  const a = new Date(timestamp * 1000);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const minute = a.getMinutes();
  return { year, month, date, hour, minute };
}
