import { ROUTE_PATH } from "./routes";

export type SideMenuItem = {
  id: string;
  pathname: (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];
  label: string;
  showIfMatched?: boolean;
  children?: SideMenuItem[];
};

export const SIDE_MENU_ITEMS: SideMenuItem[] = [
  {
    id: "dashboard",
    pathname: ROUTE_PATH.DASHBOARD,
    label: "Dashboard",
    children: [
      {
        id: "users",
        pathname: ROUTE_PATH.USERS,
        label: "Users",
        children: [
          {
            id: "user",
            pathname: ROUTE_PATH.USER_DETAILS,
            label: "User Details",
            showIfMatched: true,
          },
        ],
      },
    ],
  },
];
