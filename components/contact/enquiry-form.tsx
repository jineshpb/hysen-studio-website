"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { BUDGET_OPTIONS, SERVICE_INTEREST_OPTIONS, TIMELINE_OPTIONS } from "@/lib/enquiry";

type FormState = {
  fullName: string;
  workEmail: string;
  companyName: string;
  serviceInterest: string;
  budgetRange: string;
  timeline: string;
  message: string;
  website: string;
};

const INITIAL_STATE: FormState = {
  fullName: "",
  workEmail: "",
  companyName: "",
  serviceInterest: SERVICE_INTEREST_OPTIONS[0],
  budgetRange: BUDGET_OPTIONS[0],
  timeline: TIMELINE_OPTIONS[0],
  message: "",
  website: "",
};

export function EnquiryForm() {
  const router = useRouter();
  const [formState, setFormState] = useState<FormState>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const messageLength = useMemo(() => formState.message.trim().length, [formState.message]);

  const handleChange = (key: keyof FormState, value: string) => {
    setFormState((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = (await response.json()) as { success: boolean; message: string };

      if (!response.ok || !data.success) {
        toast.error(data.message || "Unable to submit enquiry right now.");
        setIsSubmitting(false);
        return;
      }

      setFormState(INITIAL_STATE);
      toast.success("Thanks for reaching out. Redirecting you to home...");
      setTimeout(() => {
        router.push("/");
      }, 1200);
    } catch {
      toast.error("Unable to submit enquiry right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 rounded-3xl border border-[#ddd0bf] bg-white/70 p-6 text-left shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-[#2a3239]">Full name</span>
          <input
            required
            value={formState.fullName}
            onChange={(event) => handleChange("fullName", event.target.value)}
            className="w-full rounded-xl border border-[#d6c9b8] bg-white px-4 py-3 text-[#2a3239] outline-none transition focus:border-[#cf9345]"
            placeholder="Your name"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-[#2a3239]">Work email</span>
          <input
            required
            type="email"
            value={formState.workEmail}
            onChange={(event) => handleChange("workEmail", event.target.value)}
            className="w-full rounded-xl border border-[#d6c9b8] bg-white px-4 py-3 text-[#2a3239] outline-none transition focus:border-[#cf9345]"
            placeholder="you@company.com"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-[#2a3239]">Company</span>
          <input
            required
            value={formState.companyName}
            onChange={(event) => handleChange("companyName", event.target.value)}
            className="w-full rounded-xl border border-[#d6c9b8] bg-white px-4 py-3 text-[#2a3239] outline-none transition focus:border-[#cf9345]"
            placeholder="Company name"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-[#2a3239]">Service needed</span>
          <select
            value={formState.serviceInterest}
            onChange={(event) => handleChange("serviceInterest", event.target.value)}
            className="w-full rounded-xl border border-[#d6c9b8] bg-white px-4 py-3 text-[#2a3239] outline-none transition focus:border-[#cf9345]"
          >
            {SERVICE_INTEREST_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-[#2a3239]">Budget</span>
          <select
            value={formState.budgetRange}
            onChange={(event) => handleChange("budgetRange", event.target.value)}
            className="w-full rounded-xl border border-[#d6c9b8] bg-white px-4 py-3 text-[#2a3239] outline-none transition focus:border-[#cf9345]"
          >
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-[#2a3239]">Timeline</span>
          <select
            value={formState.timeline}
            onChange={(event) => handleChange("timeline", event.target.value)}
            className="w-full rounded-xl border border-[#d6c9b8] bg-white px-4 py-3 text-[#2a3239] outline-none transition focus:border-[#cf9345]"
          >
            {TIMELINE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-5 block space-y-2">
        <span className="text-sm font-medium text-[#2a3239]">Project details</span>
        <textarea
          required
          rows={6}
          value={formState.message}
          onChange={(event) => handleChange("message", event.target.value)}
          className="w-full rounded-xl border border-[#d6c9b8] bg-white px-4 py-3 text-[#2a3239] outline-none transition focus:border-[#cf9345]"
          placeholder="Tell us about your goals, scope, deadlines, and what success looks like."
        />
        <p className="text-xs text-[#7a8188]">{messageLength}/2000 characters</p>
      </label>

      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input
            tabIndex={-1}
            autoComplete="off"
            value={formState.website}
            onChange={(event) => handleChange("website", event.target.value)}
          />
        </label>
      </div>

      <div className="mt-6 flex items-center">
        <Button type="submit" variant="cta" className="cursor-pointer" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Enquiry"}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}
