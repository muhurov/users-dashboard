"use client";

import { useSearchParams } from "next/navigation";

import { useGetUsersQuery } from "@/entities/user/api";
import { UserCard } from "@/entities/user/ui";
import { Spinner } from "@/shared/ui";

export const UserList = () => {
  const searchParams = useSearchParams();

  const search = searchParams?.get("search") || "";

  const {
    data: { users = [] } = {},
    isLoading,
    isError,
  } = useGetUsersQuery({ search });

  if (isLoading)
    return (
      <div className="flex max-w h-full relative items-center justify-center">
        <Spinner />
      </div>
    );

  if (isError) return <p>Ошибка загрузки</p>;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      {users.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          Пользователи не найдены
        </div>
      )}
    </div>
  );
};
