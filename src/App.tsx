import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  // eslint-disable-next-line no-void
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetch("/companies")
      .then((response) => response.json())
      .then((d: any) => setData(d));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data[1]}</p>
      </header>
    </div>
  );
}

export default App;
