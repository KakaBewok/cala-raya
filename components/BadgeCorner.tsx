const BadgeCorner = ({ content }: { content: string }) => {
  return (
    <div className="absolute top-0 right-0 bg-violet-200 text-violet-700 text-xs font-semibold px-3 py-1 rounded-bl">
      {content}
    </div>
  );
};

export default BadgeCorner;
