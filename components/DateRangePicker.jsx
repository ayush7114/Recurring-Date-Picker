import { useRecurrence } from "../context/RecurrenceContext";

const DateRangePicker = () => {
  const { recurrence, setRecurrence } = useRecurrence();

  return (
    <div className="flex gap-6">
      <label>
        Start Date:
        <input
          type="date"
          value={recurrence.startDate || ""}
          onChange={(e) =>
            setRecurrence({ ...recurrence, startDate: e.target.value })
          }
          className="border p-1 rounded ml-2"
        />
      </label>

      <label>
        End Date:
        <input
          type="date"
          value={recurrence.endDate || ""}
          onChange={(e) =>
            setRecurrence({ ...recurrence, endDate: e.target.value })
          }
          className="border p-1 rounded ml-2"
        />
      </label>
    </div>
  );
};

export default DateRangePicker;
