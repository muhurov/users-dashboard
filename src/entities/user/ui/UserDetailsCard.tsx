import Image from "next/image";
import { ReactNode } from "react";

import {
  FIELD_VALUE_PLACEHOLDER,
  type User,
  USER_DETAILS_FIELDS,
} from "../model";

export const UserDetailCard = ({ user }: { user: User }) => {
  const { image, firstName = "", lastName = "" } = user ?? {};
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-8 border-b border-gray-100 bg-gray-50/50 flex items-center gap-6">
        <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-inner bg-white">
          {image ? (
            <Image
              className="object-cover"
              src={image}
              alt={fullName}
              fill
              priority
              sizes="96px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-600 text-3xl font-bold">
              {`${firstName.charAt(0)}${lastName.charAt(0)}`}
            </div>
          )}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{fullName}</h1>
          <p className="text-gray-500 text-lg">@{user.username || "user"}</p>
        </div>
      </div>
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {USER_DETAILS_FIELDS.map(({ key, label, isBadge, format }) => (
          <DetailItem key={key} label={label} isBadge={isBadge}>
            {format?.(user) || (user[key] as string) || FIELD_VALUE_PLACEHOLDER}
          </DetailItem>
        ))}
      </div>
    </div>
  );
};

const DetailItem = ({
  label,
  isBadge,
  children,
}: {
  label: string;
  isBadge?: boolean;
  children: ReactNode;
}) => (
  <div className="space-y-1">
    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
      {label}
    </span>
    {isBadge ? (
      <div className="pt-1">
        <span className="inline-flex px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100 capitalize">
          {children}
        </span>
      </div>
    ) : (
      <p className="text-gray-700 font-medium truncate">{children}</p>
    )}
  </div>
);
