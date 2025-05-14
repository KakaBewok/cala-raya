"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import InputError from "@/components/dashboard/InputError";
import { CustomModal } from "@/components/dashboard/CustomModal";

interface EditMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (template: string) => void;
  initialTemplate?: string;
  loading: boolean;
  defaultTemplate?: string;
  sampleData?: {
    guest_name: string;
    event_title: string;
    event_date: string;
    start_time: string;
    end_time: string;
    time_zone: string;
    location: string;
    url: string;
  };
}

export const EditMessageModal: React.FC<EditMessageModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialTemplate = "",
  loading,
  sampleData = {
    guest_name: "Fairuz Ummi",
    event_title: "Pernikahan Slamet & Fatma",
    event_date: "1 Juni 2025",
    start_time: "10:00 WIB",
    time_zone: "WIB",
    end_time: "13:00 WIB",
    location: "Gedung Serbaguna Jakarta",
    url: "https://calaraya.vercel.app/slamet-fatma?id=QqHD9",
  },
  defaultTemplate = `
Yth. Bapak/Ibu/Saudara/i
{guest_name}
di Tempat

Dengan segala kerendahan hati, kami mengundang Bapak/Ibu/Saudara/i dan teman-teman untuk menghadiri acara

{event_title}

Pada:
🗓️ Tanggal  : {event_date}
🕛 Pukul    : {start_time} {time_zone} s/d {end_time}
📍 Lokasi   : {location}

Undangan lengkap bisa diakses di link berikut:
{url}

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir di acara kami
Mohon maaf perihal undangan hanya dibagikan melalui pesan ini

Terima kasih banyak atas perhatiannya 💕`.trim(),
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
    }
  }, [isOpen, initialTemplate, defaultTemplate]);

  if (!isMounted) return null;

  const handlePreview = () => {
    const rendered = template
      .replace(/{guest_name}/g, sampleData.guest_name)
      .replace(/{event_title}/g, sampleData.event_title)
      .replace(/{event_date}/g, sampleData.event_date)
      .replace(/{start_time}/g, sampleData.start_time)
      .replace(/{end_time}/g, sampleData.end_time)
      .replace(/{time_zone}/g, sampleData.time_zone)
      .replace(/{location}/g, sampleData.location)
      .replace(/{url}/g, sampleData.url);

    setIsPreviewText(true);
    setPreviewText(rendered);
  };

  const handleReset = () => {
    setTemplate(defaultTemplate);
    setPreviewText("");
  };

  const handleSubmit = () => {
    if (!template.includes("{guest_name}") || !template.includes("{url}")) {
      setErrorMessage("Template harus mengandung tag {guest_name} dan {url}");
      return;
    }

    setErrorMessage("");
    onSubmit(template);
  };

  return (
    <CustomModal
      title="Edit Template"
      description="Your words, your vibe - edit away!"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="space-y-4">
        {errorMessage && <InputError message={errorMessage} className="mb-2" />}

        {!isPreviewText && (
          <div>
            <textarea
              className="w-full border p-3 h-60 text-xs md:text-sm"
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
              placeholder="Write a message template..."
              disabled={loading}
            />
            <p className="text-xs text-gray-500 mt-2">
              <span className="font-semibold text-neutral-700 dark:text-white">
                Use tags
              </span>
              : <code>{"{guest_name}"}</code>, <code>{"{event_title}"}</code>,{" "}
              <code>{"{event_date}"}</code>, <code>{"{start_time}"}</code>,{" "}
              <code>{"{time_zone}"}</code>, <code>{"{end_time}"}</code>,{" "}
              <code>{"{location}"}</code>, <code>{"{url}"}</code>
            </p>
          </div>
        )}

        <div>
          {isPreviewText ? (
            <Button
              variant="outline"
              onClick={() => setIsPreviewText(false)}
              disabled={loading}
            >
              Edit
            </Button>
          ) : (
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                onClick={handlePreview}
                disabled={loading}
              >
                Preview
              </Button>
              <Button variant="ghost" onClick={handleReset} disabled={loading}>
                Reset ke Default
              </Button>
            </div>
          )}
          {/* <Button variant="ghost" onClick={handleReset} disabled={loading}>
            Reset ke Default
          </Button> */}
        </div>

        {isPreviewText && (
          <div className="p-3 border text-sm bg-muted rounded whitespace-pre-wrap">
            <span className="block font-semibold mb-1 text-gray-700">
              Hasil Preview:
            </span>
            <div className="h-80 overflow-y-auto">
              <p>{previewText}</p>
            </div>
          </div>
        )}

        <div className="pt-4 flex justify-end gap-3">
          <Button variant="outline" onClick={onClose} disabled={loading}>
            Batal
          </Button>
          <Button onClick={handleSubmit} disabled={loading}>
            Simpan
          </Button>
        </div>
      </div>
    </CustomModal>
  );
};
