import "./App.css";
import Hello from "./components/svelte/Hello.svelte";
import Counter from "./components/svelte/Counter.svelte";
import SvelteWrapper from "./components/SvelteWrapper";
import useStore from "./store";

const SvelteHello = SvelteWrapper(Hello);
const SvelteCounter = SvelteWrapper(Counter);

function App() {
  const { count, increment } = useStore();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl inline-flex space-x-2">
        <span>React</span>
        <span>
          <SvelteHello text="Svelte" />
        </span>
        <span>Counter</span>
      </h1>
      <h2 className="m-1 text-2xl font-bold">{count}</h2>
      <div>
        <button className="btn btn-success" onClick={increment}>
          Increment from React
        </button>
        <SvelteCounter />
      </div>
    </div>
  );
}

export default App;
