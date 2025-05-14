import { CustomModal } from "@/components/dashboard/CustomModal";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FileUpload } from "./FileUpload";

interface ExcelUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (file: File) => void;
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
    if (!file) return;
    onUpload(file);
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
            Upload
          </Button>
        </div>
      </div>
    </CustomModal>
  );
};
