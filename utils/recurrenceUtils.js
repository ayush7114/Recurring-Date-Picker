import {
  addDays,
  addWeeks,
  addMonths,
  addYears,
  isBefore,
  getDay,
} from "date-fns";

export const generateRecurringDates = ({
  type,
  interval,
  startDate,
  endDate,
  daysOfWeek = [],
}) => {
  if (!startDate) return [];

  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : addYears(start, 1);
  const addMap = { daily: addDays, weekly: addWeeks, monthly: addMonths, yearly: addYears };
  const addFn = addMap[type];
  const dates = [];

  let current = new Date(start);

  while (isBefore(current, end) && dates.length < 50) {
    if (type === "weekly" && daysOfWeek.length) {
      for (let i = 0; i < 7; i++) {
        const day = addDays(current, i);
        if (daysOfWeek.includes(getDay(day)) && isBefore(day, end)) {
          dates.push(new Date(day));
        }
      }
      current = addWeeks(current, interval);
    } else {
      dates.push(new Date(current));
      current = addFn(current, interval);
    }
  }

  return dates;
};
