import { FolderOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function WorkspaceStats() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center py-10 text-center">
        <div className="mb-4 rounded-full bg-muted p-4">
          <FolderOpen className="size-6 text-muted-foreground" />
        </div>

        <h3 className="font-heading text-xl">
          Your workspace is waiting.
        </h3>

        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Your workspace statistics will appear here
          once you start creating projects and tasks.
        </p>
      </CardContent>
    </Card>
  )
}