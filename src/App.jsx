import { useState } from "react";
import MyCalendar from "./Components/MyCalendar.jsx";
import "./Components/MyCalendar.css";

function App() {
  const [value, setValue] = useState(new Date());

  return (
    <>
      <div>
        <MyCalendar />
      </div>
    </>
  );
}

export default App;
