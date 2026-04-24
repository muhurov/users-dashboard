import Image from "next/image";
import Link from "next/link";

import { getRouteUserDetails } from "@/shared/config";

import { User } from "../model/types";

export type UserCardProps = {
  user: User;
};

export const UserCard = ({ user }: UserCardProps) => {
  const { id, image, firstName, lastName } = user;
  const fullName = `${firstName} ${lastName}`;

  return (
    <Link
      className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      href={getRouteUserDetails(`${id}`)}
    >
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
          {image ? (
            <Image
              className="object-cover"
              src={image}
              alt={fullName}
              fill
              priority
              sizes="44px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-600 font-bold">
              {`${firstName.charAt(0)}${lastName.charAt(0)}`}
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 truncate">
            {fullName}
          </h3>
          <p className="text-xs text-gray-500 truncate">{user.email}</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 border-t border-gray-50 pt-3">
        <div>
          <span className="block text-[10px] text-gray-400 uppercase">
            Роль
          </span>
          <span className="text-xs text-gray-700 capitalize">{user.role}</span>
        </div>
        <div>
          <span className="block text-[10px] text-gray-400 uppercase">
            Возраст
          </span>
          <span className="text-xs text-gray-700 capitalize">{user.age}</span>
        </div>
      </div>
    </Link>
  );
};
