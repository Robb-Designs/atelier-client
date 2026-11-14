import { FolderPlus, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function RecentProjects() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center py-10 text-center">
        <div className="mb-4 rounded-full bg-muted p-4">
          <FolderPlus className="size-6 text-muted-foreground" />
        </div>

        <h3 className="font-heading text-xl">No projects yet.</h3>

        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Your creative projects will show up here once you create your first
          one.
        </p>

        <div>
          <Button>
            Create your first project
            <ArrowUpRight />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
