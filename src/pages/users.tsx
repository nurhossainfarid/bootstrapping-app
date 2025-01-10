import { AddUser } from "@/components/modules/users/AddUser";
import UserCard from "@/components/modules/users/UserCard";
import { selectUsers } from "@/redux/features/users/userSlice";
import { useSelector } from "react-redux";

const Users = () => {
  const users = useSelector(selectUsers);
  return (
    <div>
      <div className="mx-auto max-w-7xl px-5 mt-20">
        <div className="flex justify-between items-center gap-5">
          <h1>Users</h1>
          <AddUser />
        </div>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
