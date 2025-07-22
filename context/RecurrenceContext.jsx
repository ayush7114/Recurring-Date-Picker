import { createContext, useContext, useState } from "react";

const RecurrenceContext = createContext();

export const useRecurrence = () => useContext(RecurrenceContext);

export const RecurrenceProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState({
    type: "daily",
    interval: 1,
    daysOfWeek: [],
    pattern: null,
    startDate: null,
    endDate: null,
  });

  return (
    <RecurrenceContext.Provider value={{ recurrence, setRecurrence }}>
      {children}
    </RecurrenceContext.Provider>
  );
};
