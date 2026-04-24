"use client";

import { Suspense } from "react";

import { UserFilters } from "@/features/user-filters";
import { Spinner } from "@/shared/ui";
import { UserList } from "@/widgets/user-list";

export default function UsersPage() {
  return (
    <section className="flex flex-1 flex-col">
      <Suspense
        fallback={
          <div className="flex flex-1 items-center justify-center">
            <Spinner />
          </div>
        }
      >
        <UserFilters />
        <UserList />
      </Suspense>
    </section>
  );
}
