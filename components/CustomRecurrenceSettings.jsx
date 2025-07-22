import { useRecurrence } from "../context/RecurrenceContext";

const CustomRecurrenceSettings = () => {
  const { recurrence, setRecurrence } = useRecurrence();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const toggleDay = (day) => {
    const updated = recurrence.daysOfWeek.includes(day)
      ? recurrence.daysOfWeek.filter((d) => d !== day)
      : [...recurrence.daysOfWeek, day];
    setRecurrence({ ...recurrence, daysOfWeek: updated });
  };

  return (
    <div className="space-y-2">
      <label>
        Repeat every{" "}
        <input
          type="number"
          min="1"
          value={recurrence.interval}
          onChange={(e) =>
            setRecurrence({ ...recurrence, interval: +e.target.value })
          }
          className="w-16 border p-1 mx-1 rounded"
        />
        {recurrence.type}
        {recurrence.interval > 1 ? "s" : ""}
      </label>

      {recurrence.type === "weekly" && (
        <div className="flex gap-2 mt-2">
          {days.map((day, i) => (
            <button
              key={day}
              onClick={() => toggleDay(i)}
              className={`px-2 py-1 rounded ${
                recurrence.daysOfWeek.includes(i)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      )}

      {recurrence.type === "monthly" && (
        <label>
          Pattern:{" "}
          <select
            value={recurrence.pattern || ""}
            onChange={(e) =>
              setRecurrence({ ...recurrence, pattern: e.target.value })
            }
            className="ml-2 border rounded p-1"
          >
            <option value="">-- Select --</option>
            <option value="second-tuesday">
              Second Tuesday of every month
            </option>
            <option value="last-friday">Last Friday of every month</option>
          </select>
        </label>
      )}
    </div>
  );
};

export default CustomRecurrenceSettings;
