import { useRecurrence } from "../context/RecurrenceContext";

const options = ["daily", "weekly", "monthly", "yearly"];

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useRecurrence();

  return (
    <div className="space-x-3">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => setRecurrence({ ...recurrence, type: opt })}
          className={`px-3 py-1 rounded-full ${
            recurrence.type === opt ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          {opt.charAt(0).toUpperCase() + opt.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default RecurrenceOptions;
