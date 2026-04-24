"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEventHandler, useEffect, useState } from "react";

import { useGetUsersQuery } from "@/entities/user";
import { useDebouncedValue } from "@/shared/lib";
import { SearchInput } from "@/shared/ui";

export const UserFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams?.get("search") ?? "");
  const debouncedSearch = useDebouncedValue(search);

  const { isFetching } = useGetUsersQuery({ search: debouncedSearch });

  useEffect(() => {
    const currentSearch = searchParams?.get("search") ?? "";

    if (currentSearch === debouncedSearch) return;

    const params = new URLSearchParams(searchParams?.toString());

    debouncedSearch
      ? params.set("search", debouncedSearch)
      : params.delete("search");

    router.push(`?${params.toString()}`);
  }, [debouncedSearch, router]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  const handleClear = () => {
    setSearch("");
  };

  return (
    <div className="flex gap-4 mb-6">
      <SearchInput
        value={search}
        placeholder="Поиск по имени..."
        isLoading={isFetching}
        onChange={handleChange}
        onClear={handleClear}
      />
    </div>
  );
};
