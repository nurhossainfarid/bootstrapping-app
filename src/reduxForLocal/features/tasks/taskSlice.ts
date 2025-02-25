import { RootState } from "@/redux/store";
import { ITask, ITaskState } from "@/types/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { deleteUser } from "../users/userSlice";

const initialState: ITaskState = {
  tasks: [
    {
      id: "iamnurhossainfarid1",
      title: "Initialize frontend",
      description: "Create Home page, and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
      assignedTo: null,
    },
    {
      id: "iamnurhossainfarid2",
      title: "Create github repository",
      description: "Create a new repository in github",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Low",
      assignedTo: null,
    },
  ],
  filter: "All",
};

type DraftTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority" | "assignedTo"
>;

const createTask = (taskData: DraftTask): ITask => {
  return {
    id: nanoid(),
    isCompleted: false,
    ...taskData,
  };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);

      state.tasks.push(taskData);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updatedFilters: (
      state,
      action: PayloadAction<"All" | "High" | "Medium" | "Low">
    ) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteUser, (state, action) => {
      state.tasks.forEach((task) =>
        task.assignedTo === action.payload ? (task.assignedTo = null) : task
      );
    });
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;

  if (filter === "Low") {
    return state.todo.tasks.filter((task) => task.priority === "Low");
  } else if (filter === "Medium") {
    return state.todo.tasks.filter((task) => task.priority === "Medium");
  } else if (filter === "High") {
    return state.todo.tasks.filter((task) => task.priority === "High");
  } else {
    return state.todo.tasks;
  }
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggleTask, deleteTask, updatedFilters } =
  taskSlice.actions;

export default taskSlice.reducer;
