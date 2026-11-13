import { WelcomeHero } from "@/features/dashboard/components/WelcomeHero";
import { WorkspaceStats } from "@/features/dashboard/components/WorkspaceStats";
export function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <WelcomeHero />
      <WorkspaceStats />
    </div>
  );
}
