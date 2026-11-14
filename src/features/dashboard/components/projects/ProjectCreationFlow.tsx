import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type ProjectType = "web-design" | "development" | "branding" | "other";

// What the form holds while the user is typing.
// Controlled inputs prefer "" over undefined, so empty strings live here.
type ProjectFormData = {
  name: string;
  problem: string;
  type: ProjectType | "";
};

// What the rest of the app receives when the flow finishes.
// Absent means "not provided". Present means "the user chose it".
export type NewProject = {
  name: string; // required
  problem?: string; // optional
  type?: ProjectType; // optional
};

type CreationStep = "name" | "problem" | "type";

// One source of truth for step order. Back and Next derive from position,
// so adding a step later means editing this array, not rewiring handlers.
const STEPS: CreationStep[] = ["name", "problem", "type"];

const PROJECT_TYPES: { value: ProjectType; label: string }[] = [
  { value: "web-design", label: "Web Design" },
  { value: "development", label: "Development" },
  { value: "branding", label: "Branding" },
  { value: "other", label: "Other" },
];

type ProjectCreationFlowProps = {
  onComplete?: (project: NewProject) => void;
  // The flow says "the user wants out". The parent decides where that goes
  // (for example, navigating back to the Projects page).
  onCancel: () => void;
};

export function ProjectCreationFlow({
  onComplete,
  onCancel,
}: ProjectCreationFlowProps) {
  const [formData, setFormData] = useState<ProjectFormData>({
    name: "",
    problem: "",
    type: "",
  });

  const [currentStep, setCurrentStep] = useState<CreationStep>("name");

  // Records only that the user tried to continue without a name.
  // Whether the error shows is derived below, so it clears on its own
  // as soon as a valid name is typed.
  const [nameAttempted, setNameAttempted] = useState(false);
  const nameError = nameAttempted && !formData.name.trim();

  const nameInputRef = useRef<HTMLInputElement>(null);

  // Derived, like nameError: is there anything the user would lose by leaving?
  const hasDraft =
    formData.name.trim() !== "" ||
    formData.problem.trim() !== "" ||
    formData.type !== "";

  // Type options are toggle buttons. Clicking the selected one again clears
  // it, which fits an optional field: unset means "not chosen".
  function toggleType(value: ProjectType) {
    setFormData((previous) => ({
      ...previous,
      type: previous.type === value ? "" : value,
    }));
  }

  // Navigation handlers change the step and nothing else.
  // Input handlers change the data and nothing else.
  // That separation is what guarantees going back never clears anything.
  function goBack() {
    const index = STEPS.indexOf(currentStep);
    const previousStep = STEPS[index - 1];

    if (previousStep) {
      setCurrentStep(previousStep);
    }
  }

  function goNext() {
    const index = STEPS.indexOf(currentStep);
    const nextStep = STEPS[index + 1];

    if (nextStep) {
      setCurrentStep(nextStep);
    }
  }

  function handleNameContinue() {
    if (!formData.name.trim()) {
      setNameAttempted(true);
      nameInputRef.current?.focus();
      return;
    }
    goNext();
  }

  // Convert form values to the app's shape once
  // "present means the user provided it".
  function handleOpenStudio() {
    const project: NewProject = {
      name: formData.name.trim(),
      problem: formData.problem.trim() || undefined,
      type: formData.type || undefined,
    };
    onComplete?.(project);
  }

  return (
    <main className="flex flex-col gap-8">
      {/* Same spot on every step. Exit is separate from Back, which only
          moves within the flow. Confirm only when there is something to lose. */}
      <div className="flex justify-end">
        {hasDraft ? (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Leave project creation?</AlertDialogTitle>
                <AlertDialogDescription>
                  Your project details haven't been saved yet. If you leave now, you'll lose what you've entered.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Keep editing</AlertDialogCancel>
                <AlertDialogAction onClick={onCancel}>
                  Discard and leave
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ) : (
          <Button type="button" variant="ghost" onClick={onCancel}>
            Cancel
          </Button>
        )}
      </div>

      {currentStep === "name" && (
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">New project</p>

            <h2 className="font-heading text-3xl">What are we calling this?</h2>

            <p className="text-muted-foreground">
              Give this idea a name. You can shape the details as you go.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <input
              ref={nameInputRef}
              type="text"
              aria-label="Project name"
              value={formData.name}
              onChange={(event) =>
                setFormData((previous) => ({
                  ...previous,
                  name: event.target.value,
                }))
              }
              placeholder="Give your project a name"
              aria-invalid={nameError}
              aria-describedby={nameError ? "project-name-error" : undefined}
              className={nameError ? "border-destructive" : ""}
            />

            {nameError && (
              <p
                id="project-name-error"
                role="alert"
                className="text-sm text-destructive"
              >
                Give it a name to continue.
              </p>
            )}
          </div>

          {/* No Back button: this is the first step. */}
          <div className="flex items-center justify-end">
            <Button type="button" onClick={handleNameContinue}>
              Continue
            </Button>
          </div>
        </section>
      )}

      {currentStep === "problem" && (
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              A little more context
            </p>

            <h2 className="font-heading text-3xl">
              What's this trying to solve?
            </h2>

            <p className="text-muted-foreground">
              Tell us what inspired this project or what you're hoping to
              accomplish.
            </p>
          </div>

          <textarea
            aria-label="Project problem statement"
            value={formData.problem}
            onChange={(event) =>
              setFormData((previous) => ({
                ...previous,
                problem: event.target.value,
              }))
            }
            placeholder="Describe the idea behind your project..."
            rows={4}
          />

          <div className="flex items-center justify-between">
            <Button type="button" variant="outline" onClick={goBack}>
              Back
            </Button>

            <div className="flex items-center gap-3">
              {/* Skip advances without touching formData. */}
              <Button type="button" variant="ghost" onClick={goNext}>
                Skip for now
              </Button>

              <Button type="button" onClick={goNext}>
                Continue
              </Button>
            </div>
          </div>
        </section>
      )}

      {currentStep === "type" && (
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              Shape your workspace
            </p>

            <h2 className="font-heading text-3xl">
              What kind of project is this?
            </h2>

            <p className="text-muted-foreground">
              This helps Atelier offer more relevant suggestions later. You can
              always change it.
            </p>
          </div>

          <div
            role="group"
            aria-label="Project type"
            className="grid gap-3 sm:grid-cols-2"
          >
            {PROJECT_TYPES.map((option) => {
              const isSelected = formData.type === option.value;

              return (
                <Button
                  key={option.value}
                  type="button"
                  variant="outline"
                  aria-pressed={isSelected}
                  onClick={() => toggleType(option.value)}
                  className={`h-auto justify-start rounded-xl p-4 text-left transition-colors ${
                    isSelected
                      ? "border-olive bg-linen"
                      : "border-border hover:bg-muted"
                  }`}
                >
                  {option.label}
                </Button>
              );
            })}
          </div>

          <div className="flex items-center justify-between">
            <Button type="button" variant="outline" onClick={goBack}>
              Back
            </Button>

            {/* Never disabled: type is optional.
                The label matches what is about to happen. */}
            <Button type="button" onClick={handleOpenStudio}>
              Open your studio
            </Button>
          </div>
        </section>
      )}
    </main>
  );
}
