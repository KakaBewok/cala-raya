const Loading = () => {
  // bg-gradient-to-tl from-rose-200 via-rose-200 to-rose-300
  // text-rose-500
  return (
    <div className="fixed inset-0 bg-neutral-50 z-30 bg-opacity-15 flex flex-col justify-center items-center ">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-neutral-700 motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loading;
