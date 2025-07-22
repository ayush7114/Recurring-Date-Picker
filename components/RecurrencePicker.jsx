import RecurrenceOptions from "./RecurrenceOptions";
import CustomRecurrenceSettings from "./CustomRecurrenceSettings";
import DateRangePicker from "./DateRangePicker";
import MiniCalendarPreview from "./MiniCalendarPreview";

const RecurrencePicker = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow space-y-6">
      <h2 className="text-2xl font-semibold">Recurring Date Picker</h2>
      <RecurrenceOptions />
      <CustomRecurrenceSettings />
      <DateRangePicker />
      <MiniCalendarPreview />
    </div>
  );
};

export default RecurrencePicker;
