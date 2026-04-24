"use client";

import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { getIndexRoute, ROUTE_LABELS } from "@/shared/config/routes";
import { findPathnameByUrl } from "@/shared/lib";

export const Breadcrumbs = () => {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="flex items-center space-y-0 text-sm text-gray-500">
      <Link
        href={getIndexRoute()}
        className="hover:text-blue-600 transition-colors"
      >
        <Home size={16} />
      </Link>
      {segments.map((segment, index) => {
        const path =
          findPathnameByUrl(`/${segments.slice(0, index + 1).join("/")}`) ?? "";
        const isLast = index === segments.length - 1;

        const label = ROUTE_LABELS[path] || segment;

        return (
          <div key={path} className="flex items-center">
            <ChevronRight size={14} className="mx-2 text-gray-300" />
            {isLast ? (
              <span className="font-semibold text-gray-900 truncate max-w-[200px]">
                {label}
              </span>
            ) : (
              <Link
                href={path}
                className="hover:text-blue-600 transition-colors"
              >
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};
