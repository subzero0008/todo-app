import { useState } from "react";
import type { Todo, FilterType } from "./types";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import "./App.css";

function App() {
  // State for the list of todos
  const [todos, setTodos] = useState<Todo[]>([]);

  // State for the current filter ("all", "active", "completed")
  const [filter, setFilter] = useState<FilterType>("all");

  // State for input validation error
  const [inputError, setInputError] = useState<string | null>(null);

  // Function to add a new todo
  const addTodo = (text: string): boolean => {
    // Reject empty input
    if (!text.trim()) {
      setInputError("Task cannot be empty");
      return false;
    }

    // Check for duplicate active task
    const duplicateExists = todos.some(
      todo =>
        todo.text.toLowerCase().trim() === text.toLowerCase().trim() &&
        !todo.completed
    );

    // Show error if duplicate exists
    if (duplicateExists) {
      setInputError("This task already exists!");
      return false;
    }

    // Clear error and add new todo
    setInputError(null);
    setTodos([
      ...todos,
      {
        id: Date.now().toString(), // Generate a unique ID using timestamp
        text,
        completed: false
      }
    ]);

    return true; // Indicate that the todo was successfully added
  };

  // Function to toggle completion state of a todo
  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Apply filtering to todos based on the selected filter
  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // Default case: "all"
  });

  return (
    <div className="app-container">
      <div className="app-glass">
        <h1 className="app-title">To-Do List</h1>
        <div className="app-content">
          {/* Input component to add new todos */}
          <TodoInput 
            onAdd={addTodo} 
            error={inputError}
            clearError={() => setInputError(null)}
          />

          {/* Filter buttons for "All", "Active", "Completed" */}
          <FilterButtons currentFilter={filter} onFilterChange={setFilter} />

          {/* Render the filtered list of todos */}
          <TodoList todos={filteredTodos} onToggle={toggleTodo} />
        </div>
      </div>

      {/* Page footer */}
      <footer className="page-footer">
        &copy; {new Date().getFullYear()} Yulian Yuriev
      </footer>
    </div>
  );
}

export default App;
