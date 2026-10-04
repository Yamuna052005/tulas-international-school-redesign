export const controlClass =
  'min-h-12 w-full rounded-lg border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-muted/70 aria-[invalid=true]:border-red-500';

/** Label + control + inline error. The control is passed as children and must use the same id. */
export default function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
