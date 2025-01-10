export interface ITask {
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "High" | "Medium" | "Low";
  member: string | null;
}

export interface ITaskState {
  tasks: ITask[];
  filter: "All" | "High" | "Medium" | "Low";
}

export interface IUser {
  id: string;
  name: string;
}

export interface IUserState {
  users: IUser[];
}
