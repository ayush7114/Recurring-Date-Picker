import { useRecurrence } from "../context/RecurrenceContext";
import { generateRecurringDates } from "../utils/recurrenceUtils";

const MiniCalendarPreview = () => {
  const { recurrence } = useRecurrence();
  const dates = generateRecurringDates(recurrence);

  return (
    <div>
      <h4 className="font-bold mb-2">Upcoming Dates</h4>
      <ul className="list-disc list-inside text-sm max-h-40 overflow-y-auto">
        {dates.map((d, i) => (
          <li key={i}>{d.toDateString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default MiniCalendarPreview;
