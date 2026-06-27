type Props = {
  title: string;
  subtitle?: string;
};

export function SectionHeader({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
        {title}
      </h2>
      <div className="w-8 h-0.5 bg-accent mx-auto mt-4 rounded-full" />
      {subtitle && (
        <p className="text-text-secondary mt-5 max-w-md mx-auto text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
