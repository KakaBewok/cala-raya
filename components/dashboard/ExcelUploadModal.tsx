import { CustomModal } from "@/components/dashboard/CustomModal";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FileUpload } from "./FileUpload";

interface ExcelUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (file: File | null, setFile: (file: File | null) => void) => void;
  loading: boolean;
}

export const ExcelUploadModal: React.FC<ExcelUploadModalProps> = ({
  isOpen,
  onClose,
  onUpload,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleUpload = () => {
    onUpload(file, setFile);
  };

  const handleFileChange = (files: File[]) => {
    const selectedFile = files[0] || null;
    setFile(selectedFile);
  };

  return (
    <CustomModal
      title="Upload Excel File"
      description="Upload a .xlsx file with guest data."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="space-y-4">
        <div>
          <FileUpload
            onChange={handleFileChange}
            files={file ? [file] : []}
            isModalOpen={isOpen}
          />
        </div>

        <div className="pt-4 flex justify-end gap-3">
          <Button variant="outline" onClick={onClose} disabled={loading}>
            Cancel
          </Button>
          <Button onClick={handleUpload} disabled={loading || !file}>
            {loading ? (
              <>
                <svg
                  className="h-5 w-5 animate-spin dark:text-neutral-900 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Uploading...
              </>
            ) : (
              "Upload"
            )}
          </Button>
        </div>
      </div>
    </CustomModal>
  );
};
