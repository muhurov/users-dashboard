"use client";

import { usePathname } from "next/navigation";

import { SIDE_MENU_ITEMS } from "@/shared/config";

import { MenuItem } from "./MenuItem";

export const SideMenu = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 text-xl font-bold text-blue-600">My App</div>
      <nav className="flex-1 px-4 space-y-1">
        {SIDE_MENU_ITEMS.map((item) => (
          <MenuItem key={item.id} item={item} pathname={pathname} />
        ))}
      </nav>
      <div className="p-4 border-t border-gray-200 text-sm text-gray-500">
        v1.0.0
      </div>
    </aside>
  );
};
