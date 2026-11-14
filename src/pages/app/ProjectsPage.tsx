import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col gap-10 p-8">
      <section className="flex flex-col gap-4">
        <span className="text-sm font-medium uppercase tracking-widest text-olive">
          Your creative workspace
        </span>

        <h1 className="max-w-2xl font-heading text-4xl leading-tight text-ink md:text-5xl">
          Where ideas become something more.
        </h1>

        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Projects are where your work and your thinking live. Bring your
          material together and build a story you can share when you're ready.
        </p>
      </section>

      <section>
        <Button size="lg" onClick={() => navigate("/app/projects/new")}>
          <Plus />
          Create your first project
        </Button>
      </section>
    </main>
  );
}
