import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { deleteUser } from "@/redux/features/users/userSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { IUser } from "@/types/types";
import { Trash2 } from "lucide-react";

interface IProps {
  user: IUser;
}

const UserCard = ({ user }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="w-full border px-5 py-3 rounded-md border-green-500">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h1 className={cn()}>{user.name}</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            onClick={() => dispatch(deleteUser(user.id))}
            variant={"link"}
            className="p-0 text-red-500"
          >
            <Trash2 />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
