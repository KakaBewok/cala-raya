"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Settings, 
  Users, 
  Send, 
  LineChart, 
  ChevronRight, 
  X,
  Smartphone,
  Copy,
  Upload,
  UserPlus,
  ArrowRight,
  MousePointer2,
  ChevronLeft
} from "lucide-react";

interface TutorialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const steps = [
  {
    title: "Setup Message",
    icon: <Settings className="w-5 h-5 text-purple-600" />,
    description: "Prepare your wedding announcement",
    points: [
      "Navigate to the 'Share Invitation' menu item in your sidebar.",
      "Customize your message template to match your preferred wedding style.",
      "Personalize the greeting (e.g., 'Dear [Guest Name]') to make it feel more intimate.",
      "Make sure to save your changes to update the global template."
    ],
    color: "bg-purple-50 dark:bg-purple-900/20",
    iconColor: "text-purple-600",
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    title: "Add Guests",
    icon: <Users className="w-5 h-5 text-blue-600" />,
    description: "Building your digital guest list",
    points: [
      "Upload Excel (.xlsx) file to quickly add hundreds of guests at once.",
      "Add guests manually one by one for last-minute additions or single invites.",
      "Our system automatically validates data and checks for duplicate entries.",
      "You can edit guest details anytime before or after sharing."
    ],
    color: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-600",
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    title: "Share Invitation",
    icon: <Send className="w-5 h-5 text-emerald-600" />,
    description: "Spread the joyful news to your loved ones",
    points: [
      "The system generates a unique, personalized link for every single guest.",
      "Copy individual links to send manually via your favorite messaging apps.",
      "Use the 'Direct WhatsApp' button for the fastest sharing experience.",
      "Preview what your guest will see before you hit send."
    ],
    color: "bg-emerald-50 dark:bg-emerald-900/20",
    iconColor: "text-emerald-600",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    title: "Monitor RSVP",
    icon: <LineChart className="w-5 h-5 text-amber-600" />,
    description: "Keep track of your wedding attendance",
    points: [
      "Go to the 'RSVP' dashboard to see real-time guest responses.",
      "Monitor attendance counts, dietary requirements, and special messages.",
      "Filter guests by 'Attending', 'Declined', or 'No Response' status.",
      "Export your final guest list for catering and seating arrangements."
    ],
    color: "bg-amber-50 dark:bg-amber-900/20",
    iconColor: "text-amber-600",
    gradient: "from-amber-500 to-orange-600"
  }
];

export const TutorialModal: React.FC<TutorialModalProps> = ({ isOpen, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);

  // Reset step when modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveStep(0);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[92vw] md:max-w-4xl lg:max-w-5xl p-0 overflow-hidden border-none shadow-2xl rounded-[1.5rem] md:rounded-[2.5rem] bg-white dark:bg-slate-950 flex flex-col max-h-[85vh] md:max-h-[90vh]">
        {/* Sticky Header */}
        <DialogHeader className="p-5 md:p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative flex-shrink-0">
          <div className="flex items-center gap-4 md:gap-5">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/10 shadow-lg">
              <MousePointer2 className="w-6 h-6 md:w-7 md:h-7 text-purple-400" />
            </div>
            <div>
              <DialogTitle className="text-xl md:text-3xl font-bold tracking-tight">Master Your Invitations</DialogTitle>
              <DialogDescription className="text-slate-400 mt-0.5 md:mt-1 font-medium text-xs md:text-base line-clamp-1 md:line-clamp-none">
                Follow this professional guide to get the most out of our platform
              </DialogDescription>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all text-white/60 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </DialogHeader>

        {/* Mobile Step Indicator - Only Mobile */}
        <div className="md:hidden flex items-center justify-between px-5 py-3 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
          <div className="flex gap-1.5">
            {steps.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 transition-all rounded-full ${activeStep === i ? "w-6 bg-purple-600" : "w-1.5 bg-slate-300 dark:bg-slate-700"}`} 
              />
            ))}
          </div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            Step {activeStep + 1} of {steps.length}
          </span>
        </div>

        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          {/* Step Navigation - Sidebar (Hidden on Mobile) */}
          <div className="hidden md:flex w-72 bg-slate-50 dark:bg-slate-900/50 border-r border-slate-100 dark:border-slate-800 p-6 space-y-3 flex-col overflow-y-auto">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all text-left group ${
                  activeStep === index 
                    ? "bg-white dark:bg-slate-800 shadow-xl shadow-black/5 ring-1 ring-slate-200 dark:ring-slate-700" 
                    : "hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                  activeStep === index 
                    ? `bg-gradient-to-br ${step.gradient} text-white shadow-lg` 
                    : "bg-slate-200 dark:bg-slate-700 text-slate-400"
                }`}>
                 {React.cloneElement(step.icon as React.ReactElement<React.HTMLAttributes<HTMLElement>>, { 
  className: `w-5 h-5 ${activeStep === index ? "text-white" : "group-hover:text-slate-600"}` 
})}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-[11px] font-bold uppercase tracking-wider mb-0.5 ${activeStep === index ? "text-purple-600" : "text-slate-400"}`}>
                    Step {index + 1}
                  </p>
                  <p className={`text-sm font-bold leading-tight truncate ${activeStep === index ? "text-slate-900 dark:text-slate-100" : "text-slate-500"}`}>
                    {step.title}
                  </p>
                </div>
                {activeStep === index && <ChevronRight className="w-4 h-4 text-slate-300" />}
              </button>
            ))}
            
            <div className="mt-8 p-6 rounded-3xl bg-gradient-to-br from-purple-600/10 to-indigo-600/10 border border-purple-500/10">
              <h5 className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-2">Pro Tip</h5>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                Always test your invitation link on your own phone before sharing with guests!
              </p>
            </div>
          </div>

          {/* Current Step Content */}
          <div className="flex-1 p-5 md:p-10 overflow-y-auto custom-scrollbar bg-white dark:bg-slate-950">
            <div className="max-w-2xl mx-auto">
              <div className="mb-8 md:mb-10 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="flex items-center justify-between mb-6 md:hidden">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${steps[activeStep].gradient} flex items-center justify-center shadow-xl shadow-purple-500/20`}>
                   {React.cloneElement(steps[activeStep].icon as React.ReactElement<React.ComponentPropsWithoutRef<"svg">>, { 
                      className: "w-7 h-7 text-white" 
                    })}
                  </div>
                  <div className="text-right">
                    <span className={`text-4xl font-black opacity-10 ${steps[activeStep].iconColor}`}>0{activeStep + 1}</span>
                  </div>
                </div>

                <div className={`hidden md:flex w-16 h-16 rounded-2xl bg-gradient-to-br ${steps[activeStep].gradient} flex items-center justify-center mb-6 shadow-xl shadow-purple-500/20`}>
                {React.cloneElement(steps[activeStep].icon as React.ReactElement<React.ComponentPropsWithoutRef<"svg">>, { 
                    className: "w-8 h-8 text-white" 
                })}
                </div>

                <h3 className="text-xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-2">{steps[activeStep].title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm md:text-lg font-medium leading-relaxed">{steps[activeStep].description}</p>
              </div>

              <div className="space-y-5 md:space-y-6 mb-10 md:mb-12">
                {steps[activeStep].points.map((point, i) => (
                  <div key={i} className="flex items-start gap-4 md:gap-5 animate-in fade-in slide-in-from-left-4" style={{ animationDelay: `${i * 150}ms` }}>
                    <div className={`mt-1 md:mt-1.5 flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full ${steps[activeStep].color} flex items-center justify-center border border-current opacity-60`}>
                      <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-current ${steps[activeStep].iconColor}`} />
                    </div>
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Enhanced Visual Aids - Responsive Grid */}
              {(activeStep === 1 || activeStep === 2) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 animate-in zoom-in-95 duration-700 delay-300">
                  <div className="group p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-purple-500/30 transition-all hover:shadow-2xl hover:shadow-purple-500/10">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center mb-3 md:mb-4 shadow-md group-hover:scale-110 transition-transform">
                      {activeStep === 1 ? <Upload className="w-5 h-5 md:w-6 md:h-6 text-blue-500" /> : <Copy className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />}
                    </div>
                    <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Method One</p>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100 mb-1 md:mb-2">{activeStep === 1 ? "Bulk Upload" : "Manual Link"}</h4>
                    <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed">
                      {activeStep === 1 ? "Import entire lists from Excel files instantly." : "Copy individual links to share on any platform."}
                    </p>
                  </div>
                  <div className="group p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-purple-500/30 transition-all hover:shadow-2xl hover:shadow-purple-500/10">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center mb-3 md:mb-4 shadow-md group-hover:scale-110 transition-transform">
                      {activeStep === 1 ? <UserPlus className="w-5 h-5 md:w-6 md:h-6 text-indigo-500" /> : <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />}
                    </div>
                    <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Method Two</p>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100 mb-1 md:mb-2">{activeStep === 1 ? "Individual Add" : "WhatsApp Direct"}</h4>
                    <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed">
                      {activeStep === 1 ? "Add single guests manually for finer control." : "Send personalized invites directly to WhatsApp."}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sticky Footer - Mobile-Optimized */}
        <DialogFooter className="p-5 md:p-8 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 sm:justify-between items-center gap-4 flex-shrink-0 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
          <div className="hidden sm:flex items-center gap-6">
            <div className="flex gap-1.5">
              {steps.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 transition-all rounded-full ${activeStep === i ? "w-8 bg-purple-600" : "w-2 bg-slate-200 dark:bg-slate-800"}`} 
                />
              ))}
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              Progress: {Math.round(((activeStep + 1) / steps.length) * 100)}%
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {activeStep > 0 && (
              <Button
                variant="outline"
                onClick={() => setActiveStep(activeStep - 1)}
                className="flex-1 sm:hidden border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold rounded-xl h-12"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back
              </Button>
            )}
            <Button
              variant="outline"
              onClick={onClose}
              className={`flex-1 sm:flex-none border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold rounded-xl md:rounded-2xl h-11 md:h-12 px-6 hover:bg-slate-50 ${activeStep > 0 ? 'hidden md:flex' : 'flex'}`}
            >
              {activeStep === 0 ? "Skip" : "Close"}
            </Button>
            {activeStep < steps.length - 1 ? (
              <Button
                onClick={() => setActiveStep(activeStep + 1)}
                className="flex-1 sm:flex-none bg-slate-900 hover:bg-black text-white font-bold rounded-xl md:rounded-2xl h-11 md:h-12 px-8 shadow-xl shadow-slate-900/10 group active:scale-95 transition-all"
              >
                Next Step
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            ) : (
              <Button
                onClick={onClose}
                className="flex-1 sm:flex-none bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl md:rounded-2xl h-11 md:h-12 px-10 shadow-xl shadow-purple-500/20 active:scale-95 transition-all"
              >
                Got it!
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TutorialModal;
