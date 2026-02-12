"use client";

import React from "react";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import { InvitationFormData, THEME_CONFIG } from "../../schema/FormSchema";
import CloudinaryButton from "../CloudinaryButton";
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "../SortableItem";
import Image from "next/image";
import { Trash2, GripVertical, Image as ImageIcon } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

interface SectionProps {
  form: UseFormReturn<InvitationFormData>;
}

export default function GallerySection({ form }: SectionProps) {
  const { control, watch, setValue, trigger } = form;
  const isMobile = useMediaQuery("(max-width: 768px)");

  const {
    fields: imageFields,
    append: appendImage,
    remove: removeImage,
    move: moveImage,
  } = useFieldArray({
    control,
    name: "images",
  });

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 5,
      },
    })
  );

  const currentThemeName = watch("themes.name") || "default";
  const visibleImageTypes = THEME_CONFIG[currentThemeName] || THEME_CONFIG["default"];

  const handleDragEnd = (event: DragEndEvent, type: string) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    // We need to find index WITHIN the subset of the same type
    // But fieldArray works with absolute indices.
    const typeIndices = imageFields
      .map((f, idx) => ({ id: f.id, type: watch(`images.${idx}.type`) }))
      .filter((f) => f.type === type)
      .map((_, idx) => idx); // This is not correct for move()

    // Correct way: find global indices
    const activeIndex = imageFields.findIndex((f) => f.id === active.id);
    const overIndex = imageFields.findIndex((f) => f.id === over.id);

    moveImage(activeIndex, overIndex);
    
    // Sync order numbers
    setTimeout(() => {
      const items = form.getValues("images");
      let order = 0;
      items.forEach((item, idx) => {
        if (item.type === type) {
          setValue(`images.${idx}.order_number`, order);
          order++;
        }
      });
      trigger("images");
    }, 10);
  };

  return (
    <div className="space-y-10">
      {visibleImageTypes.map((type) => {
        const typeImages = imageFields.filter((_, idx) => watch(`images.${idx}.type`) === type);
        
        return (
          <div key={type} className="space-y-4">
            <div className="flex justify-between items-end border-b pb-2">
              <div>
                <h3 className="text-xl font-bold capitalize text-slate-800 dark:text-slate-100">
                  {type.replace("-", " ")}
                </h3>
                <p className="text-sm text-slate-500">
                  {type === 'gallery' ? 'Add multiple photos for your gallery' : `Upload ${type.replace("-", " ")} image`}
                </p>
              </div>
              <CloudinaryButton
                type="image"
                folder="user_photos"
                onSuccess={(url) => {
                  appendImage({
                    url,
                    type: type as any,
                    order_number: typeImages.length,
                  });
                }}
                isMultiple={type === 'gallery'}
                label={typeImages.length > 0 ? "Add More" : "Upload"}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
              />
            </div>

            {typeImages.length > 0 ? (
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={(e) => handleDragEnd(e, type)}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <SortableContext
                    items={typeImages.map((f) => f.id)}
                    strategy={rectSortingStrategy}
                  >
                    {imageFields.map((field, idx) => {
                      if (watch(`images.${idx}.type`) !== type) return null;

                      return (
                        <SortableItem key={field.id} id={field.id}>
                          <div className="group relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-transparent hover:border-indigo-500 transition-all shadow-sm hover:shadow-md bg-slate-100 dark:bg-slate-800">
                            <Image
                              src={watch(`images.${idx}.url`) || "/placeholder.png"}
                              alt={`Image ${idx}`}
                              fill
                              className="object-cover"
                            />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                              <div className="bg-white/90 p-2 rounded-full cursor-grab active:cursor-grabbing text-slate-800">
                                <GripVertical className="w-5 h-5" />
                              </div>
                              <button
                                type="button"
                                onClick={() => removeImage(idx)}
                                className="bg-red-500/90 p-2 rounded-full text-white hover:bg-red-600 transition-colors"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>

                            {/* Order Badge (for gallery) */}
                            {type === 'gallery' && (
                              <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full backdrop-blur-md">
                                #{watch(`images.${idx}.order_number`) || 0}
                              </div>
                            )}
                          </div>
                        </SortableItem>
                      );
                    })}
                  </SortableContext>
                </div>
              </DndContext>
            ) : (
              <div className="h-32 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl flex flex-col items-center justify-center text-slate-400 bg-slate-50/50 dark:bg-slate-900/50">
                <ImageIcon className="w-8 h-8 mb-2 opacity-20" />
                <p className="text-sm italic">No images uploaded for this section</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
