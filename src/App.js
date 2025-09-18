import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    setTimestamp(new Date().toLocaleString());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🛡️ Self-Healing React App</h1>
        <p>This app automatically fixes itself using GitOps!</p>

        <div
          style={{
            background: "rgba(255,255,255,0.1)",
            padding: "20px",
            borderRadius: "10px",
            margin: "20px 0",
          }}
        >
          <button
            onClick={() => setCount(count + 1)}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#61dafb",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Clicked {count} times
          </button>
        </div>

        <div style={{ fontSize: "14px", opacity: 0.8 }}>
          <p>🔄 Auto-sync enabled</p>
          <p>🛠️ Self-healing active</p>
          <p>📅 Deployed: {timestamp}</p>
          <p>🏷️ Version: 1.0.0</p>
        </div>
      </header>
    </div>
  );
}

export default App;
