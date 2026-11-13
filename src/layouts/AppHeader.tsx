
import { Search, Bell, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function AppHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border px-6">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">
          Workspace
        </span>

        <span className="text-muted-foreground">/</span>

        <span className="font-medium text-foreground">
          Dashboard
        </span>
      </div>

      {/* Header actions */}
      <div className="flex items-center gap-3">

        {/* Search */}
        <div className="relative hidden w-64 md:block">
          <Search aria-hidden="true" className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            placeholder="Search projects, assets, tasks"
            className="pl-9"
          />
        </div>

        {/* Notifications */}
        <Button
          variant="outline"
          size="icon"
          aria-label="Notifications"
        >
          <Bell />
        </Button>

        {/* Share workspace */}
        <Button variant="outline">
          <Share2 />
          <span>Share workspace</span>
        </Button>

      </div>
    </header>
  )
}
