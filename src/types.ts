export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export type FilterType = "all" | "active" | "completed"; // Задължително 'export'!