export const isNextDay = (previousDate, currentDate) => {
  return (
    previousDate.getTime() < currentDate.getTime() &&
    (previousDate.getDate() < currentDate.getDate() ||
      previousDate.getMonth() < currentDate.getMonth() ||
      previousDate.getFullYear() < currentDate.getFullYear())
  );
};
