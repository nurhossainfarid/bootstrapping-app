import { ITaskState } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ITaskState = {
  tasks: [
    {
      id: "iamnurhossainfarid1",
      title: "Initialize frontend",
      description: "Create Home page, and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "iamnurhossainfarid2",
      title: "Create github repository",
      description: "Create a new repository in github",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Low",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
