"use client";

import { useGetUsersQuery } from "@/entities/user";
import { useFilters } from "@/shared/lib";
import { SearchInput, SearchInputProps } from "@/shared/ui";

export const UserFilters = () => {
  const { debouncedSearch, search, page, limit, onSearch, onClear } =
    useFilters();

  const { isFetching } = useGetUsersQuery({
    search: debouncedSearch,
    page,
    limit,
  });

  const handleSearch: SearchInputProps["onChange"] = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="flex gap-4 mb-6">
      <SearchInput
        value={search}
        placeholder="Поиск по имени..."
        isLoading={isFetching}
        onChange={handleSearch}
        onClear={onClear}
      />
    </div>
  );
};
