import "./App.css";
import Hello from "./components/svelte/Hello.svelte";
import SvelteWrapper from "./components/SvelteWrapper";
import useStore from "./store";

const SvelteHello = SvelteWrapper(Hello);

function App() {
  const { count, increment } = useStore();

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
          text="Svelte"
          onClick={() => alert("onClick from Svelte")}
        />
      </h1>
      <div>
        <button className="btn btn-success" onClick={increment}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
