import { useRef } from "react";
import { useLayoutEffect } from "react";
import { useState } from "react";
import "./App.css";
import Hello from "./components/Hello.svelte";
function App() {
  const [count, setCount] = useState(0);
  const svelteRef = useRef();

  useLayoutEffect(() => {
    while (svelteRef.current?.firstChild) {
      svelteRef.current?.firstChild?.remove();
    }
    new Hello({
      target: svelteRef.current,
      props: { text: "Svelte", onClick: () => alert("onClick from Svelte") },
    });
  }, []);

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
        <span style={{ display: "inline-block" }} ref={svelteRef}></span>
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
