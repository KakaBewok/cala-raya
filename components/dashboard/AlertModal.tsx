"use client";

import { useEffect, useState } from "react";
import { CustomModal } from "@/components/dashboard/CustomModal";
import { Button } from "@/components/ui/button";

interface AlertModalProps {
  isOpen: boolean;
  onClose: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  onConfirm: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  loading: boolean;
  description?: string;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
  description = "This action cannot be undone.",
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <CustomModal
      title="Are you sure?"
      description={description}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-3 flex items-center justify-center md:justify-end w-full">
        <Button disabled={loading} variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button
          disabled={loading}
          variant="destructive"
          onClick={onConfirm}
          className="dark:bg-red-500"
        >
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
              Processing...
            </>
          ) : (
            "Continue"
          )}
        </Button>
      </div>
    </CustomModal>
  );
};
