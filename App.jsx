import { RecurrenceProvider } from "./context/RecurrenceContext";
import RecurrencePicker from "./components/RecurrencePicker";
import "./index.css";

function App() {
  return (
    <RecurrenceProvider>
      <div className="min-h-screen bg-gray-100 p-10">
        <RecurrencePicker />
      </div>
    </RecurrenceProvider>
  );
}

export default App;
