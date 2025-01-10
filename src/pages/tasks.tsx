import { AddTask } from "@/components/modules/tasks/AddTask";
import TaskCard from "@/components/modules/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTaskQuery } from "@/redux/api/baseApi";
import { ITask } from "@/types/types";
const Tasks = () => {
  // const tasks = useSelector(selectTasks);
  // const dispatch = useAppDispatch();

  const { data, isLoading } = useGetTaskQuery(undefined);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between items-center gap-5">
        <h1>Tasks</h1>
        <Tabs defaultValue="All" className="w-[400px] ml-auto">
          <TabsList className="grid w-full grid-cols-4">
            {/* <TabsTrigger onClick={() => dispatch(updatedFilters("All"))} value="All">All</TabsTrigger>
            <TabsTrigger onClick={() => dispatch(updatedFilters("Low"))} value="Low">Low</TabsTrigger>
            <TabsTrigger onClick={() => dispatch(updatedFilters("Medium"))} value="Medium">Medium</TabsTrigger>
            <TabsTrigger onClick={() => dispatch(updatedFilters("High"))} value="High">High</TabsTrigger> */}
            <TabsTrigger value="All">All</TabsTrigger>
            <TabsTrigger value="Low">Low</TabsTrigger>
            <TabsTrigger value="Medium">Medium</TabsTrigger>
            <TabsTrigger value="High">High</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTask />
      </div>
      <div className="flex flex-col gap-5 mt-5">
        {!isLoading && data.tasks.map((task: ITask) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
