import { Routes, Route } from "react-router-dom";
import TimelineApp from "./Components/Timeline/TimelineApp";

function Test() {
  return <div>Test</div>;
}

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/timeline" element={<TimelineApp />} />
        <Route index element={<Test />} />
      </Routes>
    </div>
  );
}
