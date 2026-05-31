import { EnquiryForm } from "@/components/contact/enquiry-form";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-[#2a3239]">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Let&apos;s build your next product.</h1>
      <p className="mt-4 max-w-3xl text-[#626a72]">
        Tell us what you need help with and we&apos;ll respond with a practical next step. Most enquiries receive a response within one business day.
      </p>

      <EnquiryForm />
    </main>
  );
}
