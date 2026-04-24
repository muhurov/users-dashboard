"use client";

import { notFound, useRouter } from "next/navigation";

import { useGetUserByIdQuery, User, UserDetailCard } from "@/entities/user";
import { ROUTE_PATH } from "@/shared/config";
import { BackButton, Spinner } from "@/shared/ui";

export default function UserDetailsPage({ userId }: { userId: string }) {
  const router = useRouter();

  const { data: user, isLoading, isError } = useGetUserByIdQuery(userId);

  if (isLoading)
    return (
      <div className="flex flex-1 h-full relative items-center justify-center">
        <Spinner />
      </div>
    );

  if (isError || !user) return notFound();

  const handleBack = () => {
    router.push(ROUTE_PATH.USERS);
  };

  return (
    <div className="space-y-4 flex-1">
      <BackButton onClick={handleBack}>Вернуться к списку</BackButton>
      <UserDetailCard user={user as User} />
    </div>
  );
}
