import { WelcomeHero } from "@/features/dashboard/components/WelcomeHero";
import { WorkspaceStats } from "@/features/dashboard/components/WorkspaceStats";
import { RecentProjects } from "@/features/dashboard/components/RecentProjects";

export function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <WelcomeHero />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <WorkspaceStats />
        </div>

        <div className="lg:col-span-2">
          <RecentProjects />
        </div>
      </div>
    </div>
  );
}
