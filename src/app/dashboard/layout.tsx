import { ReactNode } from "react";

import { SideMenu } from "@/widgets/side-menu";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <SideMenu />
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8 justify-between">
          <h1 className="text-lg font-semibold text-gray-800">Панель</h1>
          <div className="w-8 h-8 bg-gray-200 rounded-full" />
        </header>
        <section className="flex-1 overflow-y-auto p-8">
          <div className="max-w-5xl">{children}</div>
        </section>
      </main>
    </div>
  );
}
