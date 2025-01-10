import { RootState } from "@/redux/store";
import { IUser, IUserState } from "@/types/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

const initialState: IUserState = {
  users: [
    {
      id: "userid-1",
      name: "Nur",
    },
    {
      id: "userid-2",
      name: "Hossain",
    },
    {
      id: "userid-3",
      name: "Farid",
    },
  ],
};

type DraftUser = Pick<IUser, "name">;

const createUser = (userData: DraftUser) => {
  return {
    id: nanoid(),
    ...userData,
  };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<DraftUser>) => {
      const userData = createUser(action.payload);

      state.users.push(userData);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUsers = (state: RootState) => {
  return state.user.users;
};

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
