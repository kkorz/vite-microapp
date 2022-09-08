import { createSignal } from "solid-js";

function Count() {
  const [count, setCount] = createSignal(0);
  const increment = () => setCount(count() + 1);

  return (
  
    <button type="button" onClick={increment}>
      click me: {count()}
    </button>
  );
}

export default Count;
