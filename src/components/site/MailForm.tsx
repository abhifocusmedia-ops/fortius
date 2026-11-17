import { useState, type FormEvent, type ReactNode } from "react";
import { contact } from "@/lib/site";
import { cn } from "@/lib/utils";

export type Field =
  | { name: string; label: string; type?: "text" | "email" | "tel" | "date" | "url"; required?: boolean; full?: boolean }
  | { name: string; label: string; type: "textarea"; required?: boolean; full?: boolean }
  | { name: string; label: string; type: "checkboxes"; options: string[]; required?: boolean; full?: boolean }
  | { name: string; label: string; type: "select"; options: string[]; required?: boolean; full?: boolean };

/**
 * Collects the same fields as the original site's form and opens a pre-filled email
 * to the Fortius team. No message is sent until the visitor sends it from their email app.
 */
export function MailForm({ subject, fields, submitLabel, dark = false, consent, note }: {
  subject: string; fields: Field[]; submitLabel: string; dark?: boolean; consent?: ReactNode; note?: ReactNode;
}) {
  const [opened, setOpened] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    for (const f of fields) {
      if (f.type === "checkboxes" && f.required && fd.getAll(f.name).length === 0) {
        setError(`Please choose at least one option for “${f.label}”.`);
        return;
      }
    }
    setError(null);
    const body = fields
      .map((f) => `${f.label}: ${f.type === "checkboxes" ? fd.getAll(f.name).join(", ") : (fd.get(f.name) ?? "")}`)
      .join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  const input = cn(
    "w-full border-0 border-b bg-transparent px-0 py-3 text-base outline-none transition-colors focus:ring-0",
    dark ? "border-paper/25 placeholder:text-paper/30 focus:border-volt" : "border-onyx/25 placeholder:text-onyx/30 focus:border-navy",
  );
  const label = cn("eyebrow", dark ? "text-paper/50" : "text-muted-foreground");

  return (
    <form onSubmit={onSubmit} className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
      {fields.map((f) => (
        <div key={f.name} className={cn(f.full && "sm:col-span-2")}>
          {f.type === "checkboxes" ? (
            <fieldset>
              <legend className={label}>{f.label}{f.required && " *"}</legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {f.options.map((o) => (
                  <label key={o} className={cn("cursor-pointer border px-4 py-2.5 text-sm transition-colors has-[:checked]:border-volt has-[:checked]:bg-volt has-[:checked]:text-volt-foreground", dark ? "border-paper/25" : "border-onyx/20")}>
                    <input type="checkbox" name={f.name} value={o} className="sr-only" />
                    {o}
                  </label>
                ))}
              </div>
            </fieldset>
          ) : (
            <label className="block">
              <span className={label}>{f.label}{f.required && " *"}</span>
              {f.type === "textarea" ? (
                <textarea name={f.name} required={f.required} rows={4} className={input} />
              ) : f.type === "select" ? (
                <select name={f.name} required={f.required} className={cn(input, dark && "[&>option]:text-onyx")} defaultValue="">
                  <option value="" disabled>Choose an option</option>
                  {f.options.map((o) => <option key={o}>{o}</option>)}
                </select>
              ) : (
                <input name={f.name} type={f.type ?? "text"} required={f.required} className={input} />
              )}
            </label>
          )}
        </div>
      ))}
      {consent && (
        <label className="flex items-start gap-3 text-sm sm:col-span-2">
          <input type="checkbox" required className="mt-1 h-4 w-4 accent-[var(--volt)]" />
          <span className={dark ? "text-paper/70" : "text-muted-foreground"}>{consent}</span>
        </label>
      )}
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center">
        <button type="submit" className={cn("inline-flex h-14 items-center justify-center px-8 text-[0.8rem] font-semibold uppercase tracking-[0.16em] transition-colors", dark ? "bg-volt text-volt-foreground hover:bg-paper" : "bg-navy text-paper hover:bg-ink")}>
          {submitLabel}
        </button>
        <p className={cn("text-sm", dark ? "text-paper/50" : "text-muted-foreground")}>
          {note ?? <>Opens your email app with your details addressed to {contact.email}.</>}
        </p>
      </div>
      {error && <p role="alert" className="text-sm text-destructive sm:col-span-2">{error}</p>}
      {opened && (
        <p role="status" className={cn("text-sm sm:col-span-2", dark ? "text-paper/70" : "text-muted-foreground")}>
          Your email app should now be open — press send there to reach the Fortius team. If nothing opened, email us at {contact.email}.
        </p>
      )}
    </form>
  );
}
