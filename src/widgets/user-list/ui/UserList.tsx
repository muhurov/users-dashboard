"use client";

import { useGetUsersQuery } from "@/entities/user/api";
import { UserCard, UserCardSkeleton } from "@/entities/user/ui";
import { useFilters } from "@/shared/lib";
import { Pagination } from "@/shared/ui";

export const UserList = () => {
  const { search, page, limit, onPageChange } = useFilters();

  const {
    data: { users = [], total = 0 } = {},
    isFetching,
    isError,
  } = useGetUsersQuery({ search, page, limit });

  if (isError) return <p>Ошибка загрузки</p>;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isFetching
          ? Array.from({ length: limit }).map((_, key) => (
              <UserCardSkeleton key={`user-skeleton-${key}`} />
            ))
          : users.map((user) => <UserCard key={user.id} user={user} />)}
      </div>
      {users.length === 0 && !isFetching && (
        <div className="text-center py-20 text-gray-400">
          Пользователи не найдены
        </div>
      )}
      <div className="flex justify-center pt-6">
        <Pagination
          currentPage={page}
          totalItems={total}
          limit={limit}
          onPageChange={onPageChange}
          isPlaceholderData={isFetching}
        />
      </div>
    </div>
  );
};
