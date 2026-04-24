export const ROUTE_PATH = {
  DASHBOARD: "/dashboard",
  USERS: "/dashboard/users",
  USER_DETAILS: "/dashboard/users/:id",
};

export const getIndexRoute = () => "/";
export const getRouteUsers = () => "/dashboard/users";
export const getRouteUserDetails = (id: string) => `/dashboard/users/${id}`;

export const ROUTE_LABELS: Record<string, string> = {
  [ROUTE_PATH.DASHBOARD]: "Дашборд",
  [ROUTE_PATH.USERS]: "Пользователи",
  [ROUTE_PATH.USER_DETAILS]: "Детали",
};
