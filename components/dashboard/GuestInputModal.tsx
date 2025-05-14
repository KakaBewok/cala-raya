import { CustomModal } from "@/components/dashboard/CustomModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import InputError from "./InputError";

interface GuestInputModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (guestNames: string[]) => void;
  loading: boolean;
}

export const GuestInputModal: React.FC<GuestInputModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [guestName, setGuestName] = useState<string>("");
  const [guestList, setGuestList] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setGuestList([]);
      setGuestName("");
    }
  }, [isOpen]);

  if (!isMounted) return null;

  const handleErrorMessage = (message: string, duration: number) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage("");
    }, duration);
  };

  const handleAddGuest = () => {
    if (!guestName.trim()) return;
    if (!guestList.includes(guestName.trim())) {
      setGuestList([...guestList, guestName.trim()]);
    } else {
      handleErrorMessage(`Name "${guestName}" already exists.`, 4000);
    }
    setGuestName("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && guestName.trim()) {
      e.preventDefault();
      if (!guestList.includes(guestName.trim())) {
        setGuestList((prev) => [...prev, guestName.trim()]);
      } else {
        handleErrorMessage(`Name "${guestName}" already exists.`, 4000);
      }
      setGuestName("");
    }
  };

  const handleSubmit = () => {
    if (guestList.length === 0) return;
    onSubmit(guestList);
  };

  return (
    <CustomModal
      title="Add Guests"
      description="Add guest names manually."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="space-y-4">
        <div>
          <InputError message={errorMessage} className="mb-2" />
          <div className="flex gap-2">
            <Input
              placeholder="Enter guest name"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <Button onClick={handleAddGuest} disabled={loading}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {guestList.length > 0 && (
            <span
              onClick={() => setGuestList([])}
              className="text-red-600 underline text-xs cursor-pointer mt-2 font-normal"
            >
              Clear All
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {guestList.map((name, idx) => (
            <span
              key={idx}
              className=" bg-sky-200 text-sky-800 dark:bg-sky-900 dark:text-white text-xs font-medium px-2 py-1 rounded"
            >
              {name}
              <button
                onClick={() =>
                  setGuestList((prev) =>
                    prev.filter((guestName) => guestName !== name)
                  )
                }
                className="ml-2 text-red-500 hover:text-red-700 cursor-pointer"
                aria-label="Delete guest"
              >
                ×
              </button>
            </span>
          ))}
        </div>

        <div className="pt-4 flex justify-end gap-3">
          <Button variant="outline" onClick={onClose} disabled={loading}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={loading || guestList.length === 0}
          >
            Submit
          </Button>
        </div>
      </div>
    </CustomModal>
  );
};
