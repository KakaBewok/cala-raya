const BadgeCorner = ({ content }: { content: string }) => {
  return (
    <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-bl">
      {content}
    </div>
  );
};

export default BadgeCorner;
