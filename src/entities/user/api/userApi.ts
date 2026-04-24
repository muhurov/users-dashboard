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
  page?: number;
  limit?: number;
};

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UsersResponse, UserQuery>({
      query: ({ search, page, limit }) => {
        console.log("query", search, page, limit);
        return {
          url: `/users${search ? "/search" : ""}`,
          params: {
            ...(search && { q: search }),
            ...(page && limit && { skip: (page - 1) * limit }),
            limit,
          },
        };
      },
      providesTags: ["User"],
      keepUnusedDataFor: 0,
    }),
    getUserById: builder.query<User, string>({
      query: (id) => `/users/${id}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
      keepUnusedDataFor: 0,
    }),
  }),
  overrideExisting: true,
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
