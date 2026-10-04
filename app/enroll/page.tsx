"use client";

import { useState } from "react";
const courses = [
  "Generative AI & Prompt Engineering",
  "Python & AI Development",
  "Data Science & AI",
  "Data Analytics & AI",
  "Full Stack Development & AI",
  "AI Automation",
  "Agentic AI",
  "Digital Marketing & AI",
  "Cloud Computing & AI",
  "UI/UX & AI",
];

export default function EnrollPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const data = {
    fullName: formData.get("fullName"),
    age: formData.get("age"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    collegeName: formData.get("collegeName"),
    branch: formData.get("branch"),
    course: formData.get("course"),
  };

  try {
    const response = await fetch(
  "https://script.google.com/macros/s/AKfycbzTv9Y0ARBDdz6aX0cFDnUG1dBL8h29Ozd9zMWoq0W_D51csrfXgvyu2_-7m7l0jTlUWQ/exec",
  {
    method: "POST",
    body: JSON.stringify(data),
  }
);

    const result = await response.json();

    if (result.success) {
  window.location.href = `/enroll/payment?course=${encodeURIComponent(
    String(data.course)
  )}`;
} else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Unable to submit your details. Please try again.");
  }

  };

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
            Start Your Studot Journey
          </h1>

          <p className="mt-3 text-slate-600">
            Fill in your details and choose the skill you want to build.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-8">

          {submitted ? (
            <div className="py-12 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-3xl">
                ✓
              </div>

              <h2 className="mt-5 text-2xl font-bold text-slate-900">
                Details Submitted!
              </h2>

              <p className="mt-3 text-slate-600">
                Your enrollment details have been received.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-full bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-600"
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </div>

              {/* Age */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  min="16"
                  max="60"
                  placeholder="Enter your age"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your contact number"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </div>
{/* College Name */}
<div>
  <label className="mb-2 block text-sm font-semibold text-slate-800">
    College Name
  </label>
  <input
    type="text"
    name="collegeName"
    placeholder="Enter your college name"
    required
    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
  />
</div>
              {/* Branch */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Studying Branch
                </label>

                <select
                  name="branch"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                >
                  <option value="">Select your branch</option>
                  <option>CSE</option>
                  <option>IT</option>
                  <option>AI & ML</option>
                  <option>AI & DS</option>
                  <option>ECE</option>
                  <option>EEE</option>
                  <option>Mechanical Engineering</option>
                  <option>Civil Engineering</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Course */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Select a Course
                </label>

                <select
                  name="course"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                >
                  <option value="">Choose your course</option>

                  {courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-sky-500 px-6 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-sky-600 hover:shadow-xl"
              >
                Continue to Enrollment
              </button>

              <p className="text-center text-xs text-slate-500">
                Your details will be used only for Studot enrollment.
              </p>

            </form>
          )}
        </div>

        {/* Back */}
        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-sm font-semibold text-sky-600 hover:text-sky-700"
          >
            ← Back to Studot
          </a>
        </div>

      </div>
    </main>
  );
}