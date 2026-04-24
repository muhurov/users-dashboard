import { baseApi } from "@/shared/api";

import { User } from "../model";

export type UsersResponse = {
  users: User[];
  limit: number;
  skip: number;
  total: number;
};

export type UserQuery = {
  search?: string;
};

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UsersResponse, UserQuery>({
      query: ({ search }) => {
        if (!search) return "/users";

        return `/users/search?q=${search}`;
      },
      providesTags: ["User"],
      keepUnusedDataFor: 0,
    }),
    getUserById: builder.query<User, string>({
      query: (id) => `/users/${id}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),
  }),
  overrideExisting: false,
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
