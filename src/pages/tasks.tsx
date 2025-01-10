import { AddTask } from "@/components/modules/tasks/AddTask";
import TaskCard from "@/components/modules/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updatedFilters } from "@/redux/features/tasks/taskSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { useSelector } from "react-redux";

const Tasks = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useAppDispatch();

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between items-center gap-5">
        <h1>Tasks</h1>
        <Tabs defaultValue="All" className="w-[400px] ml-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger onClick={() => dispatch(updatedFilters("All"))} value="All">All</TabsTrigger>
            <TabsTrigger onClick={() => dispatch(updatedFilters("Low"))} value="Low">Low</TabsTrigger>
            <TabsTrigger onClick={() => dispatch(updatedFilters("Medium"))} value="Medium">Medium</TabsTrigger>
            <TabsTrigger onClick={() => dispatch(updatedFilters("High"))} value="High">High</TabsTrigger>
          </TabsList>
        </Tabs>
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
