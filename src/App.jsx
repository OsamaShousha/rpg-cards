import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "Lära useState",
    "Se re-render",
    "Exam 2 senare",
  ]);

  const [draft, setDraft] = useState("");

  console.log(todos);

  function handleChange(e) {
    setDraft(e.target.value);
  }

  function handleAdd() {
    const text = draft.trim();

    if (text === "") return;

    setTodos([...todos, text]);

    setDraft("");
  }

  function handleClear() {
    setDraft("");
  }

  return (
    <main>
      <h1>Övnings-todo</h1>

      <p>Antal uppgifter: {todos.length}</p>

      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>

      <input
        type="text"
        value={draft}
        onChange={handleChange}
        placeholder="Skriv uppgift..."
      />

      <p>Kladd just nu: {draft}</p>

      <button type="button" onClick={handleAdd}>
        Lägg till
      </button>

      <button type="button" onClick={handleClear}>
        Rensa
      </button>

      <button type="button" onClick={handleAdd}>
        Lägg till
      </button>

      <button type="button" onClick={handleClear}>
        Rensa
      </button>
    </main>
  );
}

export default App;