import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedValue } from "./useDebouncedValue";

export type UseQueryWithFiltersReturnValue = {
  search: string;
  debouncedSearch: string;
  page: number;
  limit: number;
  onPageChange: (page: number) => void;
  onSearch: (value: string) => void;
  onClear: () => void;
};

export type UseQueryWithFilters = {
  (): UseQueryWithFiltersReturnValue;
};

export const useFilters: UseQueryWithFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [search, setSearch] = useState(searchParams?.get("search") ?? "");
  const debouncedSearch = useDebouncedValue(search);

  const page = Number(searchParams?.get("page")) || 1;
  const limit = 12;

  useEffect(() => {
    const currentSearch = searchParams?.get("search") ?? "";

    if (currentSearch === debouncedSearch) return;

    const params = new URLSearchParams(searchParams?.toString());

    debouncedSearch
      ? params.set("search", debouncedSearch)
      : params.delete("search");

    router.push(debouncedSearch ? `?search=${debouncedSearch}` : pathname);
  }, [debouncedSearch, router]);

  useEffect(() => {
    const urlSearch = searchParams?.get("search") ?? "";

    if (urlSearch === search) return;

    setSearch(urlSearch);
  }, [searchParams]);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", page.toString());

    router.push(`?${params.toString()}`);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const handleClear = () => {
    setSearch("");
  };

  return {
    search,
    debouncedSearch,
    page,
    limit,
    onPageChange: handlePageChange,
    onSearch: handleSearch,
    onClear: handleClear,
  };
};
