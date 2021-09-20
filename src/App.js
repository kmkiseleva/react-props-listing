import Listing from "./components/Listing";
import "./App.css";
import sourceData from "./assets/sourceData.json";

function App() {
  return (
    <div>
      <Listing items={sourceData} />
    </div>
  );
}

export default App;
