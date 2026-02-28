import { useState } from "react";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";

interface CloudinaryButtonProps {
  onSuccess: (data: { url: string; public_id: string; resource_type: string }) => void;
  type: "image" | "music";
  label?: string;
  folder?: string;
  className?: string;
  isMultiple?: boolean;
  maxFiles?: number;
}

const CloudinaryButton = ({
  onSuccess,
  type,
  label,
  folder,
  className,
  isMultiple,
  maxFiles,
}: CloudinaryButtonProps) => {
  const [isPreparing, setIsPreparing] = useState(false);

  // 2MB for images, 10MB for music
  const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2,097,152 bytes
  const MAX_MUSIC_SIZE = 10 * 1024 * 1024; // 10,485,760 bytes
  const limit = type === "image" ? MAX_IMAGE_SIZE : MAX_MUSIC_SIZE;

  const handleSuccess = (result: CloudinaryUploadWidgetResults) => {
    setIsPreparing(false);
    if (
      result.event === "success" &&
      result.info &&
      typeof result.info !== "string"
    ) {
      onSuccess({
        url: result.info.secure_url,
        public_id: result.info.public_id,
        resource_type: result.info.resource_type || "image",
      });
    }
  };

  const handleError = (error: unknown) => {
    setIsPreparing(false);
    console.error("Cloudinary Widget Error:", error);
    toast.error("Cloudinary could not be initialized. Check your internet or configuration.");
  };

  return (
    <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      onSuccess={handleSuccess}
      onError={handleError}
      onOpen={() => {
        setIsPreparing(false);
      }}
      options={{
        multiple: isMultiple,
        maxFiles: maxFiles || 1,
        resourceType: type === "music" ? "video" : "image",
        folder: folder || "invitation_media/uncategorized",
        maxFileSize: limit,
        clientAllowedFormats:
          type === "music"
            ? ["mp3", "wav", "ogg"]
            : ["jpg", "png", "webp", "jpeg"],
      }}
    >
      {({ open, isLoading }) => {
        return (
          <button
            type="button"
            disabled={isPreparing || isLoading}
            onClick={(e) => {
              e.preventDefault();
              if (open) {
                setIsPreparing(true);
                open();
              } else {
                toast.error("Upload widget is still loading. Please wait a moment.");
              }
            }}
            className={`${
              className || "px-3 py-1 bg-green-500 text-white rounded text-sm"
            } flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-wait`}
          >
            {(isPreparing || isLoading) ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>{isLoading ? "Loading Widget..." : "Preparing..."}</span>
              </>
            ) : (
              label || `+ Add ${type}`
            )}
          </button>
        );
      }}
    </CldUploadWidget>
  );
};

export default CloudinaryButton;
