import Link from "next/link";

import { ROUTE_PATH, SideMenuItem } from "@/shared/config";
import { getIsPathnameMatched } from "@/shared/lib";

export type MenuItemProps = {
  item: SideMenuItem;
  pathname: string | null;
  depth?: number;
};

export const MenuItem = ({ item, pathname, depth = 0 }: MenuItemProps) => {
  const isPathnameMatched = getIsPathnameMatched(
    ROUTE_PATH.USER_DETAILS,
    `${pathname}`,
  );

  if (item.showIfMatched && !isPathnameMatched) return null;

  const isActive =
    pathname === item.pathname || (item.showIfMatched && isPathnameMatched);
  const isParentOfActive = isPathnameMatched && !isActive;

  return (
    <>
      <Link
        href={item.pathname}
        className={`block px-4 py-2 rounded-lg transition-colors ${
          isActive
            ? "bg-blue-50 text-blue-700 font-bold"
            : isParentOfActive
              ? "text-blue-600 font-medium"
              : "text-gray-600 hover:bg-gray-100"
        }`}
        style={{ marginLeft: `${depth * 12}px` }}
      >
        {item.label}
      </Link>
      {item.children && (
        <div className="mt-1 space-y-1">
          {item.children.map((child) => (
            <MenuItem
              key={child.id}
              item={child}
              pathname={pathname}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </>
  );
};
