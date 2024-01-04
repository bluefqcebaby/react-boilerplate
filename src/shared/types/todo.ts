export interface ITodoDTO {
  name: string;
  userId: string;
}

export interface ITodo extends ITodoDTO {
  id: number;
  isCompleted: boolean;
  createdAt: string;
}
