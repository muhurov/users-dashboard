export const ROUTE_PATH = {
  DASHBOARD: "/dashboard",
  USERS: "/dashboard/users",
  USER_DETAILS: "/dashboard/users/:id",
};

export const getRouteUsers = () => `/dashboard/users`;
export const getRouteUserDetails = (id: string) => `/dashboard/users/${id}`;
