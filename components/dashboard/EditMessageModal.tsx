"use client";

import { CustomModal } from "@/components/dashboard/CustomModal";
import InputError from "@/components/dashboard/InputError";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export interface SampleRundown {
  title: string;
  event_date: string;
  start_time: string;
  end_time: string;
  time_zone: string;
  location: string;
  order_number: number;
}

interface SampleData {
  guest_name: string;
  event_title: string;
  url: string;
  rundowns: SampleRundown[];
}

interface EditMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (template: string) => void;
  initialTemplate?: string;
  loading: boolean;
  defaultTemplate?: string;
  sampleData?: SampleData;
}

export const EditMessageModal: React.FC<EditMessageModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialTemplate = "",
  loading,
  sampleData = {
    guest_name: "Fairuz Ummi",
    event_title: "The Wedding of Slamet & Fatma",
    url: `${process.env.NEXT_PUBLIC_APP_URL_PROD!}/slamet-fatma?id=QqHD9`,
    rundowns: [
      {
        title: "Akad",
        event_date: "Sabtu, 16 Februari 2025",
        start_time: "10.00",
        end_time: "12.00",
        time_zone: "WIB",
        location: "Gedung Serbaguna Jakarta",
        order_number: 1,
      },
      {
        title: "Resepsi",
        event_date: "Minggu, 17 Februari 2025",
        start_time: "14.00",
        end_time: "18.00",
        time_zone: "WIB",
        location: "Masjid Al-Falah",
        order_number: 2,
      },
    ],
  },
  defaultTemplate = `
Yth. Bapak/Ibu/Saudara/i
{guest_name}
di Tempat

Dengan rahmat serta ridho Allah SWT dan tanpa mengurangi rasa hormat kami. Perkenan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri dan memberikan doa restu pada acara kami: 

{event_title}
{event_rundowns}

Undangan lengkap bisa diakses di link berikut:
{url}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir di acara kami.
Mohon maaf perihal undangan hanya dibagikan melalui pesan ini.

Atas kehadiran dan doa restunya, kami ucapkan terima kasih.
`.trim(),
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [template, setTemplate] = useState<string>(initialTemplate);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [previewText, setPreviewText] = useState<string>("");
  const [isPreviewText, setIsPreviewText] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTemplate(initialTemplate || defaultTemplate);
      setPreviewText("");
      setIsPreviewText(false);
    }
  }, [isOpen, initialTemplate, defaultTemplate]);

  if (!isMounted) return null;

  const generateRundownText = (rundowns: SampleRundown[]) => {
    if (!rundowns || rundowns.length === 0) return "";

    return rundowns
      .sort((a, b) => a.order_number - b.order_number)
      .map((rundown) => {
        return `
${rundown.title}:
🗓️ ${rundown.event_date}
🕛 ${rundown.start_time} ${rundown.time_zone} - ${rundown.end_time} ${rundown.time_zone}
📍 ${rundown.location}`;
      })
      .join("\n");
  };

  const handlePreview = () => {
    const rundownText = generateRundownText(sampleData.rundowns);
    const rendered = template
      .replace(/{guest_name}/g, sampleData.guest_name)
      .replace(/{event_title}/g, sampleData.event_title)
      .replace(/{url}/g, sampleData.url)
      .replace(/{event_rundowns}/g, rundownText);

    setIsPreviewText(true);
    setPreviewText(rendered);
  };

  const handleReset = () => {
    setTemplate(defaultTemplate);
    setPreviewText("");
  };

  const handleSubmit = () => {
    if (!template.includes("{guest_name}") || !template.includes("{url}")) {
      setErrorMessage("Template must contain tags {guest_name} and {url}");
      return;
    }

    setErrorMessage("");
    onSubmit(template);
  };

  return (
    <CustomModal
      title="Edit Template"
      description="Give your invite a personal touch!"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="space-y-4">
        {errorMessage && <InputError message={errorMessage} className="mb-2" />}

        {!isPreviewText && (
          <div className="mb-5">
            <textarea
              className="dark:bg-neutral-800 dark:text-white w-full p-3 h-60 text-xs md:text-sm border border-neutral-400 bg-sky-100 rounded-sm"
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
              placeholder="Write a message template..."
              disabled={loading}
            />
            <p className="dark:text-white text-xs text-neutral-900 mt-2">
              <span className="font-bold text-neutral-700 dark:text-white">
                Use tags:
              </span>
              <br />
              <code>{" {guest_name}"}</code>, <code>{"{event_title}"}</code>,
              <code>{" {event_rundowns}"}</code>, <code>{"{url}"}</code>
            </p>
          </div>
        )}

        <div>
          {isPreviewText ? (
            <Button
              className="bg-green-500 hover:bg-green-600 text-white dark:bg-green-500 dark:hover:bg-green-600 cursor-pointer"
              size={"sm"}
              onClick={() => setIsPreviewText(false)}
              disabled={loading}
            >
              Edit
            </Button>
          ) : (
            <div className="flex flex-wrap gap-2">
              <Button
                size={"sm"}
                className="w-full md:w-auto bg-sky-600 hover:bg-sky-700 text-white dark:bg-sky-600 dark:hover:bg-sky-700 cursor-pointer"
                onClick={handlePreview}
                disabled={loading}
              >
                Preview with Dummy Data
              </Button>
              <Button
                size={"sm"}
                className="w-full md:w-auto bg-red-200 hover:bg-red-200 text-red-600 dark:bg-red-200 dark:hover:bg-red-200 cursor-pointer"
                onClick={handleReset}
                disabled={loading}
              >
                Reset to Default
              </Button>
            </div>
          )}
        </div>

        {isPreviewText && (
          <div className="text-sm rounded whitespace-pre-wrap w-full">
            <span className="block font-semibold mb-1 text-neutral-700 dark:text-white">
              Preview
            </span>
            <div className="dark:bg-neutral-800 dark:text-white bg-sky-100 h-80 overflow-y-auto border border-neutral-400 p-3 rounded-sm">
              <p>{previewText}</p>
            </div>
          </div>
        )}

        <div className="pt-4 flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={loading}
            className="cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="cursor-pointer"
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
                Saving...
              </>
            ) : (
              "Save"
            )}
          </Button>
        </div>
      </div>
    </CustomModal>
  );
};
