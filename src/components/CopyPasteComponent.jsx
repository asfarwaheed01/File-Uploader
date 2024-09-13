import React, { useState } from "react";
import fs from "fs";

const CodePasteComponent = () => {
  const [code, setCode] = useState("");

  const handlePaste = (event) => {
    const pastedCode = event.target.value;
    setCode(pastedCode);
  };

  const handleGenerate = () => {
    const fileName = "NewComponent.tsx";

    try {
      fs.writeFileSync(fileName, code);
      console.log("Code generated successfully!");
      alert("File created successfully!");
    } catch (error) {
      console.error("Error creating file:", error);
      alert("An error occurred while creating the file.");
    }
  };

  return (
    <div>
      <textarea onChange={handlePaste} value={code} />
      <button onClick={handleGenerate}>Generate</button>
    </div>
  );
};

export default CodePasteComponent;
