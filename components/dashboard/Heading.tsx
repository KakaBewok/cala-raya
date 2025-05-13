export default function Heading({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className="mb-8 space-y-0.5">
      <h2 className={`${className} text-2xl font-semibold tracking-tight`}>
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-sm">{description}</p>
      )}
    </div>
  );
}
