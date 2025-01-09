import { AddTask } from "@/components/modules/tasks/AddTask";
import TaskCard from "@/components/modules/tasks/TaskCard";
import { selectTasks } from "@/redux/features/tasks/taskSlice";
import { useSelector } from "react-redux";

const Tasks = () => {
  const tasks = useSelector(selectTasks);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between items-center">
        <h1>Tasks</h1>
        <AddTask />
      </div>
      <div className="flex flex-col gap-5 mt-5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
