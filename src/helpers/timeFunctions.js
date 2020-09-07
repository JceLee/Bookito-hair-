const maxMinuteValueInDay = 1439; // 60mins * 24hours = 1440
const minutesInHour = 60;
const timeConvertingFactor = 30;
const dash = " - ";

export default function formatTime(value) {
  value = value > maxMinuteValueInDay ? maxMinuteValueInDay : value;
  let hours = Math.floor(value / minutesInHour);
  let minutes = value - hours * minutesInHour;
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (minutes === 0) minutes = "00";
  return `${hours}:${minutes}`;
}

export function displayTime(value) {
  const [startTime, endTime] = value;
  const convertedStartTime = startTime * timeConvertingFactor;
  const convertedEndTime = endTime * timeConvertingFactor;
  const from = formatTime(convertedStartTime);
  const to = formatTime(convertedEndTime);
  return [from, dash, to];
}
