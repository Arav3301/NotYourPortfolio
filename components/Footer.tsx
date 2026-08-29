export default function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="container-x flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-space text-xl font-semibold text-ink sm:text-2xl">
            Made while exploring.
          </p>
          <p className="mt-1 text-sm text-faint">
            ARAV — somewhere on the internet.
          </p>
        </div>
        <p className="font-geist-mono text-[11px] tracking-wide text-faint">
          © {new Date().getFullYear()} Arav Patel. No rights reserved, explore freely.
        </p>
      </div>
    </footer>
  );
}
