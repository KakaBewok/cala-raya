const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-tl from-rose-200 via-rose-200 to-rose-300 z-30 bg-opacity-15 flex flex-col justify-center items-center ">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-rose-500 motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
      <p className="text-xs text-rose-500 mt-3 text-center">
        Lagi diracik dulu tampilannya 🧑‍🍳
      </p>
    </div>
  );
};

export default Loading;
