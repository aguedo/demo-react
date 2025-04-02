import { Routes, Route } from "react-router-dom";
import TimelineApp from "./Components/Timeline/TimelineApp";
import Home from "./Home";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/timeline" element={<TimelineApp />} />
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}
