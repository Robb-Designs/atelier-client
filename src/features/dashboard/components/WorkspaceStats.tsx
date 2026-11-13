import { FolderOpen, ListChecks, CircleCheck } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const stats = [
  {
    title: "Active projects",
    value: 8,
    description: "Currently working on",
    icon: FolderOpen,
  },
  {
    title: "Tasks in progress",
    value: 12,
    description: "Across your projects",
    icon: ListChecks,
  },
  {
    title: "Completed",
    value: 6,
    description: "This month",
    icon: CircleCheck,
  },
];

export function WorkspaceStats() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Card key={stat.title}>
              <CardHeader>
                <CardTitle>{stat.title}</CardTitle>
                <CardDescription>{stat.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-semibold">{stat.value}</span>

                  <Icon className="size-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
