export default function Heading({
  title,
  description,
  additionalInfo,
  className,
}: {
  title: string;
  description?: string;
  additionalInfo?: string;
  className?: string;
}) {
  return (
    <div className="mb-5 md:mb-8 space-y-0.5">
      <h2 className={`${className} text-2xl font-semibold tracking-tight`}>
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-xs md:text-sm">
          {description}
        </p>
      )}
      {additionalInfo && (
        <p className="text-muted-foreground text-xs md:text-sm">
          {additionalInfo}
        </p>
      )}
    </div>
  );
}
