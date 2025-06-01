import type { Todo } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
}

// Component to render the list of todos or an empty state message
export default function TodoList({ todos, onToggle }: TodoListProps) {
  return (
    <div className="mt-4">
      {/* If there are no todos, show an empty state message */}
      {todos.length === 0 ? (
        <div className="text-center py-8">
          <div className="flex justify-center mb-4">
            {/* Icon representing empty list */}
            <div className="bg-white/10 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-cyan-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
          </div>
          {/* Empty list text */}
          <h3 className="text-xl font-medium text-white mb-2">No tasks yet</h3>
          <p className="text-white/60">Add your first task to get started</p>
        </div>
      ) : (
        // Render todo items if available
        <ul className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
          {todos.map((todo) => (
            // Each todo is rendered using the TodoItem component
            <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
          ))}
        </ul>
      )}
    </div>
  );
}
