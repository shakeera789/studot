"use client";

import { Suspense, use } from "react";
import { useSearchParams } from "next/navigation";

function PaymentContent() {
  const searchParams = useSearchParams();

  const course = searchParams.get("course") || "Selected Course";

  return (
    <main className="min-h-screen bg-sky-50 px-4 py-12">
      <div className="mx-auto max-w-2xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <a href="/" className="inline-block">
            <img
              src="/studot-logo.png"
              alt="Studot"
              className="mx-auto h-16 w-auto"
            />
          </a>

          <h1 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
            Complete Your Enrollment
          </h1>

          <p className="mt-3 text-slate-600">
            You are enrolling in:
          </p>

          <p className="mt-2 text-xl font-bold text-sky-600">
            {course}
          </p>
        </div>

        {/* Payment Card */}
        <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-8">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Course Fee
            </p>

            <p className="mt-2 text-4xl font-bold text-slate-900">
              ₹3,000
            </p>

            <p className="mt-2 text-sm text-slate-500">
              One-time payment for the 3-month program
            </p>
          </div>

          <div className="mt-8 rounded-2xl bg-sky-50 p-5">
            <h2 className="font-bold text-slate-900">
              Payment
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Payment options will be available here once Studot's
              payment gateway is connected.
            </p>
          </div>

          <button
            disabled
            className="mt-8 w-full cursor-not-allowed rounded-xl bg-slate-300 px-6 py-4 text-lg font-bold text-white"
          >
            Payment Coming Soon
          </button>

          <p className="mt-4 text-center text-xs text-slate-500">
            Your enrollment details have been received.
          </p>

        </div>

        {/* Back */}
        <div className="mt-6 text-center">
          <a
            href="/enroll"
            className="text-sm font-semibold text-sky-600 hover:text-sky-700"
          >
            ← Back to Enrollment
          </a>
        </div>

      </div>
    </main>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-sky-50" />}>
      <PaymentContent />
    </Suspense>
  );
}
