import { CustomModal } from "@/components/dashboard/CustomModal";
import { useEffect, useState } from "react";
import { GuestColumn } from "@/types/guest-column";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GuestData } from "@/types/guest-data";

interface EditGuestModalProps {
  selectedData: GuestColumn;
  isOpen: boolean;
  onClose: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  onSubmit: (guest: GuestData) => void;
  loading: boolean;
}

export const EditGuestModal: React.FC<EditGuestModalProps> = ({
  selectedData,
  isOpen,
  onClose,
  onSubmit,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [guest, setGuest] = useState<GuestColumn>(selectedData);
  const formSchema = z.object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name max. 50 characters"),
    phone_number: z
      .string()
      .min(7, "Phone number too short")
      .max(20, "Phone number too long")
      .regex(/^[0-9+]+$/, "Phone number must contain only numbers and '+'")
      .optional()
      .or(z.literal("")),
    address: z
      .string()
      .max(100, "Address max. 100 characters")
      .optional()
      .or(z.literal("")),
    notes: z
      .string()
      .max(100, "Notes max. 100 characters")
      .optional()
      .or(z.literal("")),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: guest.name,
      phone_number: guest.phone_number,
      address: guest.address,
      notes: guest.notes,
    },
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setGuest(selectedData);
    }
  }, [isOpen]);

  if (!isMounted) return null;

  const resetForm = () => {
    form.reset({
      name: guest.name,
      phone_number: guest.phone_number,
      address: guest.address,
      notes: guest.notes,
    });
  };

  function onSubmitHandler(values: z.infer<typeof formSchema>) {
    onSubmit(values);
    resetForm();
    console.log(values);
  }

  function onCloseHandler() {
    resetForm();
    onClose();
  }

  return (
    <CustomModal
      title="Edit Guest"
      description=""
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="mt-5 space-y-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmitHandler)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Phone number <span className="italic">(Optional)</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    <span className="text-xs">
                      Phone number must start with +62 or 0
                    </span>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Address <span className="italic">(Optional)</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Notes <span className="italic">(Optional)</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="pt-4 flex justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={onCloseHandler}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
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
                  "Submit"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </CustomModal>
  );
};
