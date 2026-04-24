"use client";

import { User } from "@/entities/user";
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

  console.log("users", users, search, page, limit);

  if (isError) return <p>Ошибка загрузки</p>;

  const usersData = users.length
    ? users
    : Array.from({ length: limit }).map((_, i) => ({ id: `${i}` }));

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {usersData.map((user) =>
          isFetching ? (
            <UserCardSkeleton key={user.id} />
          ) : (
            <UserCard key={user.id} user={user as User} />
          ),
        )}
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
