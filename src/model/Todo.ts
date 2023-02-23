export interface Todo {
  id: number;
  isCompleted: boolean;
  todo: string;
  getTodo: () => Promise<void>;
}
