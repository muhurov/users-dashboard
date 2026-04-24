import { UserX } from "lucide-react";
import Link from "next/link";

import { getRouteUsers } from "@/shared/config";

export default function UserNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-6 bg-white rounded-2xl border border-dashed border-gray-300 gap-4">
      <div className="p-4 bg-red-50 rounded-full text-red-500 mb-4">
        <UserX size={48} />
      </div>
      <h2 className="text-2xl font-bold text-gray-900">
        Пользователь не найден
      </h2>
      <Link
        href={getRouteUsers()}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Вернуться к списку
      </Link>
    </div>
  );
}
