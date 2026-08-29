type Props = {
  title: string;
  subtitle?: string;
  id?: string;
};

/**
 * Section heading with an understated editorial divider line.
 */
export default function SectionHeading({ title, subtitle, id }: Props) {
  return (
    <div className="border-b border-border-subtle pb-5" id={id}>
      <div className="mb-3 flex items-center gap-3">
        <h2 className="font-space text-2xl font-semibold tracking-tight text-ink sm:text-[30px] lg:text-4xl">
          {title}
        </h2>
        <span className="h-px flex-1 bg-border-subtle" />
      </div>
      {subtitle && (
        <p className="max-w-xl text-sm leading-relaxed text-faint sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
