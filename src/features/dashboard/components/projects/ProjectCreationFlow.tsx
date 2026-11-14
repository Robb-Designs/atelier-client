import { useState } from "react";

type ProjectFormData = {
  name: string;
  problem: string;
  type: "web-design" | "development" | "branding" | "other" | "";
};

type CreationStep = "name" | "problem" | "type";

export function ProjectCreationFlow() {
  const [formData, setFormData] = useState<ProjectFormData>({
    name: "",
    problem: "",
    type: "",
  });

  const [currentStep, setCurrentStep] = useState<CreationStep>("name");

  return (
    <main>
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">New project</p>

          <h2 className="font-heading text-3xl">What are we calling this?</h2>

          <p className="text-muted-foreground">
            Give this idea a name. You can shape the details as you go.
          </p>
        </div>

        <input
          type="text"
          value={formData.name}
          onChange={(event) =>
            setFormData((previous) => ({
              ...previous,
              name: event.target.value,
            }))
          }
          placeholder="Give your project a name"
        />

        <button
          type="button"
          disabled={!formData.name.trim()}
          onClick={() => setCurrentStep("problem")}
        >
          Continue
        </button>
      </section>
    </main>
  );
}
