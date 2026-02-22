import {
  CldUploadButton,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";

interface CloudinaryButtonProps {
  onSuccess: (url: string) => void;
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
  const handleSuccess = (result: CloudinaryUploadWidgetResults) => {
    if (
      result.event === "success" &&
      result.info &&
      typeof result.info !== "string"
    ) {
      onSuccess(result.info.secure_url);
    }
  };

  return (
    <CldUploadButton
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      onSuccess={handleSuccess}
      options={{
        multiple: isMultiple,
        maxFiles: maxFiles || 1,
        resourceType: type === "music" ? "video" : "image",
        folder: folder || (type === "music" ? "audio_files" : "image_files"),
        maxFileSize: 1000000, // 1mb
        clientAllowedFormats:
          type === "music"
            ? ["mp3", "wav", "ogg"]
            : ["jpg", "png", "webp", "jpeg"],
      }}
      className={
        className || "px-3 py-1 bg-green-500 text-white rounded text-sm"
      }
    >
      {label || `+ Add ${type}`}
    </CldUploadButton>
  );
};

export default CloudinaryButton;
