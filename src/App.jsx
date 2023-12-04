import "./App.css";
import StopLight from "./StopLight";

function App() {
  return (
    <div className="page">
      <StopLight initialState="go" />
      <StopLight />
      <StopLight initialState="slow" />
    </div>
  );
}

export default App;
