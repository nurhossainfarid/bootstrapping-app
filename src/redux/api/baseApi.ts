import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["Task"],
  endpoints: (builder) => ({
    getTask: builder.query({
      query: () => "/tasks",
      providesTags: ["Task"],
    }),  
    addTask: builder.mutation({
      query: (taskData) => ({
        url: "/tasks",
        method: "POST",
        body: taskData,
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

export const { useGetTaskQuery, useAddTaskMutation } = baseApi;
