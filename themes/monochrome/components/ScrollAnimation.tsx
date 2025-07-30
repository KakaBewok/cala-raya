const ScrolAnimation = ({ isGalleryOpen }: { isGalleryOpen: boolean }) => {
  return (
    <div
      className={`${
        isGalleryOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-1500 mt-4 flex items-center gap-3 text-gray-500 uppercase tracking-widest text-sm mb-16 `}
    >
      <span>Scroll</span>
      <div className="relative w-24 h-[2px] overflow-hidden">
        <span className="absolute left-0 top-0 h-full w-full animate-loading-line bg-gray-500"></span>
      </div>
    </div>
  );
};

export default ScrolAnimation;
