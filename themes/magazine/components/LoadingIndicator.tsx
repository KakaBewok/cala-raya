// components/LoadingIndicator.tsx
export default function LoadingIndicator() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="animate-spin h-10 w-10 rounded-full border-4 border-orange-400 border-t-transparent mx-auto mb-4" />
        <p className="text-orange-600 text-sm font-medium">
          Memuat undangan...
        </p>
      </div>
    </div>
  );
}
