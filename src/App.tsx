import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetch("/companies")
      .then((response) => response.json())
      .then((d: any) => setData(d));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* @ts-expect-error */}
        <p>{!data ? "Loading..." : data[0]?.name}</p>
      </header>
    </div>
  );
}

export default App;
