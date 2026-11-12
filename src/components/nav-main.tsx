/* MAIN NAV LINKS */

import type { ReactNode } from "react"
import { NavLink, useLocation } from "react-router-dom"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

type NavItem = {
  title: string
  url: string
  icon?: ReactNode
}

type NavMainProps = {
  label: string
  items: NavItem[]
}

export function NavMain({ label, items }: NavMainProps) {
  const { pathname } = useLocation()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>

      <SidebarMenu>
        {items.map((item) => {
          const isActive =
            pathname === item.url ||
            (item.url !== "/app" &&
              pathname.startsWith(`${item.url}/`))

          return (
            <SidebarMenuItem key={item.url}>
              <SidebarMenuButton
                render={<NavLink to={item.url} />}
                isActive={isActive}
                tooltip={item.title}
              >
                {item.icon}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}