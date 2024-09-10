import { ApiService } from "../service/apService";

const todoEndpoints = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => "/todos",
      providesTags: "todo",
    }),

    postTodo: builder.mutation({
      query: (formData) => ({
        url: "/todos",
        body: formData,
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      }),
      invalidatesTags: "todo",
    }),
  }),
});

export const { useGetTodoQuery, usePostTodoMutation } = todoEndpoints;
