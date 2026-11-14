export function CreateProjectPage() {
  return (
    <main className="flex flex-col gap-8 p-8">
      <section className="flex flex-col gap-3">
        <span className="text-sm font-medium uppercase tracking-widest text-olive">
          New project
        </span>

        <h1 className="font-heading text-4xl text-ink">
          Start with an idea.
        </h1>

        <p className="max-w-xl text-muted-foreground">
          Every great project starts somewhere. Give your work
          a name, and you can fill in the details as you go.
        </p>
      </section>
    </main>
  )
}