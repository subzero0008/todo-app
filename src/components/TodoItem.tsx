import type { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
}

// Component representing a single todo item in the list
export default function TodoItem({ todo, onToggle }: TodoItemProps) {
  return (
    // Container div for the todo item
    // Adds "completed" class if the todo is marked as completed
    // Clicking the item toggles its completed state via onToggle callback
    <div 
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      onClick={() => onToggle(todo.id)}
    >
      {/* Checkbox area: shows a checkmark icon if todo is completed */}
      <div className="checkbox">
        {todo.completed && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>

      {/* Displays the todo text */}
      <span className="todo-text">{todo.text}</span>

      {/* If the todo is not completed, show an "Active" badge */}
      {!todo.completed && <span className="badge">Active</span>}
    </div>
  );
}
