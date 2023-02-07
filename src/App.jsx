import { useState } from "react";
import "./App.css";
import Hello from "./components/svelte/Hello.svelte";
import SvelteWrapper from "./components/SvelteWrapper";

const SvelteHello = SvelteWrapper(Hello);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="text-3xl">
        React +{" "}
        <SvelteHello
          style={{ display: "inline" }}
          text="Svelte"
          onClick={() => alert("onClick from Svelte")}
        />
      </h1>
      <div>
        <button
          className="btn btn-success"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
