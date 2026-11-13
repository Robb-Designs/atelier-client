/*Responsible for:
- Rendering the sidebar.
- Rendering the main content area.
- Providing layout across authenticated pages.*/

import { Outlet } from "react-router-dom";
import { AppHeader } from "@/layouts/AppHeader";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <AppHeader />

        <main className="flex-1">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
