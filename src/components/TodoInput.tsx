import { useState, useEffect } from "react";

interface TodoInputProps {
  onAdd: (text: string) => void;  // Callback to add a new todo with the given text
  error: string | null;           // Error message string or null if no error
  clearError: () => void;         // Callback to clear the current error
}

export default function TodoInput({ onAdd, error, clearError }: TodoInputProps) {
  // Local state to keep track of the input field value
  const [text, setText] = useState("");

  // Clear error whenever user changes the input text (if there is an error)
  useEffect(() => {
    if (error && text) {
      clearError();
    }
  }, [text]);

  // Handles form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();     // Prevent page reload on form submit
    onAdd(text);            // Call parent's onAdd with current input text
    if (!error) setText(""); // Clear input if no error was set after add attempt
  };

  return (
    <div className="input-section">
      {/* Form to add a new todo */}
      <form onSubmit={handleSubmit} className="input-container">
        <div className="input-wrapper">
          {/* Text input field */}
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)} // Update input state on user typing
            placeholder="What needs to be done?"
            className={`todo-input ${error ? 'input-error' : ''}`} // Add error style if error exists
          />
          {/* Submit button with plus icon */}
          <button type="submit" className="add-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </form>

      {/* Display error message below input if error exists */}
      {error && <div className="error-message visible">{error}</div>}
    </div>
  );
}
