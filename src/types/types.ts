export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "High" | "Medium" | "Low";
  assignedTo: string | null;
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
