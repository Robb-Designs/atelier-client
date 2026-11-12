/* SIDEBAR */

"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
/* import { NavProjects } from "@/components/nav-projects" */

import {
  LayoutDashboardIcon,
  FolderKanbanIcon,
  ListTodoIcon,
  SparklesIcon,
  PanelsTopLeftIcon,
  ImagesIcon,
  Settings2Icon,
  UserRoundIcon,
  Flower2Icon,
} from "lucide-react"


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const navigation = {
  workspace: [
    {
      title: "Dashboard",
      url: "/app",
      icon: <LayoutDashboardIcon />,
    },
    {
      title: "Projects",
      url: "/app/projects",
      icon: <FolderKanbanIcon />,
    },
    {
      title: "My Tasks",
      url: "/app/tasks",
      icon: <ListTodoIcon />,
    },
  ],

  create: [
    {
      title: "Atelier AI",
      url: "/app/ai",
      icon: <SparklesIcon />,
    },
    {
      title: "Portfolio Studio",
      url: "/app/portfolio",
      icon: <PanelsTopLeftIcon />,
    },
  ],

  resources: [
    {
      title: "Asset Library",
      url: "/app/assets",
      icon: <ImagesIcon />,
    },
  ],

  personal: [
    {
      title: "Settings",
      url: "/app/settings",
      icon: <Settings2Icon />,
    },
    {
      title: "Profile",
      url: "/app/profile",
      icon: <UserRoundIcon />,
    },
  ],
}

const user = {
  name: "Your Name",
  email: "you@example.com",
  avatar: "",
}

export function AppSidebar(
  props: React.ComponentProps<typeof Sidebar>
) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-3 px-2 py-3 group-data-[collapsible=icon]:justify-center">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Flower2Icon className="size-5" />
          </div>

          <span className="font-heading text-xl tracking-tight group-data-[collapsible=icon]:hidden">
            atelier.
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <NavMain
          label="Workspace"
          items={navigation.workspace}
        />

        <NavMain
          label="Create"
          items={navigation.create}
        />

        <NavMain
          label="Resources"
          items={navigation.resources}
        />

        <NavMain
          label="Personal"
          items={navigation.personal}
        />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
