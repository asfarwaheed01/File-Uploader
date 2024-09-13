import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CodePasteComponent from "./components/CopyPasteComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CodePasteComponent />
    </>
  );
}

export default App;
