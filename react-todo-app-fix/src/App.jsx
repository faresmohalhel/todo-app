import { useState } from "react";
import "./App.css";
import Contact from "./Contact";
import Home from "./Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <Contact />
    </>
  );
}

export default App;
