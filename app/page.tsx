
import IntroVideo from "./studot-video";
const courses = [
  {
    title: "Generative AI & Prompt Engineering",
    description:
      "Learn generative AI tools, prompt engineering and practical AI applications.",
  },
  {
    title: "Python & AI Development",
    description:
      "Build a strong Python foundation and create practical AI-powered applications.",
  },
  {
    title: "Data Science & AI",
    description:
      "Learn data science, machine learning and AI through practical projects.",
  },
  {
    title: "Data Analytics & AI",
    description:
      "Turn real-world data into insights using analytics, visualization and AI.",
  },
  {
    title: "Full Stack Development & AI",
    description:
      "Build modern web applications with full-stack development and AI integration.",
  },
  {
    title: "AI Automation",
    description:
      "Create intelligent workflows that combine AI, automation tools and real-world tasks.",
  },
  {
    title: "Agentic AI",
    description:
      "Learn how AI agents work and build practical agent-based solutions.",
  },
  {
    title: "Digital Marketing & AI",
    description:
      "Learn digital marketing with AI-powered content, analytics, automation and campaigns.",
  },
  {
    title: "Cloud Computing & AI",
    description:
      "Learn cloud fundamentals, deployment and how AI applications work on the cloud.",
  },
  {
    title: "UI/UX & AI",
    description:
      "Design user-friendly digital products using UI/UX principles and modern AI tools.",
  },
];
  

const features = [
  "Live trainer-led classes",
  "Practical learning",
  "Real-time doubt solving",
  "Notes & learning resources",
  "Resume preparation",
  "Mini interview preparation",
  "Communication improvement",
  "Certificate after completion",
];

export default function Home() {
  return (
    <>
      <IntroVideo />

      <main className="min-h-screen bg-white text-slate-900">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-sky-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-extrabold tracking-tight text-sky-600">
            <img
  src="/studot-logo.png"
  alt="Studot"
  className="h-10 w-auto"
/>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#about" className="text-sm font-medium hover:text-sky-600">
              About
            </a>
            <a href="#courses" className="text-sm font-medium hover:text-sky-600">
              Courses
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-sky-600">
              How It Works
            </a>
          </div>

          <a
            href="#enroll"
            className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-600"
          >
            Enroll Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-100">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
  <p className="mb-4 text-3xl font-black tracking-tight text-sky-500">
    Studot
  </p>

  <div className="mb-6 inline-flex rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-600 shadow-sm">
    Built for B.Tech students
  </div>
            

            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl studot-fade-up">
  Your degree is just the{" "}
  <span className="text-sky-500">beginning.</span>
</h1>
              

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 md:text-xl studot-fade-up studot-delay-1">
  Build practical, future-focused skills alongside your degree
  and become ready for what comes next.
</p>
              

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
  href="#courses"
  className="rounded-full bg-sky-500 px-7 py-3.5 text-center font-bold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-sky-600 studot-button"
>
  Explore Courses
</a>
                

              <a
  href="#enroll"
  className="rounded-full border border-sky-200 bg-white px-7 py-3.5 text-center font-bold text-sky-600 transition hover:bg-sky-50 studot-button"
>
  Start Your Journey
</a>
                
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-200/60 blur-3xl studot-float" />
              
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-sky-300/40 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white bg-white/80 p-8 shadow-2xl shadow-sky-100 backdrop-blur">
              <div className="rounded-3xl bg-sky-500 p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-widest text-sky-100">
                  Studot
                </p>

                <h2 className="mt-4 text-4xl font-black">
                  Degree + Skill
                </h2>

                <p className="mt-4 leading-7 text-sky-50">
                  Learn skills that move with the future—not just with your
                  syllabus.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-sky-50 p-5">
                  <p className="text-2xl font-black text-sky-600">Live</p>
                  <p className="mt-1 text-sm text-slate-600">Trainer-led learning</p>
                </div>

                <div className="rounded-2xl bg-sky-50 p-5">
                  <p className="text-2xl font-black text-sky-600">3 Mo</p>
                  <p className="mt-1 text-sm text-slate-600">Skill-building journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="font-bold uppercase tracking-widest text-sky-500">
            What is Studot?
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Go beyond the degree.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Studot is a college-focused upskilling platform designed to help
            B.Tech students graduate with more than a degree—with practical
            skills, real-world exposure and career-ready confidence.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {[
            ["01", "Degree + Skill"],
            ["02", "Future-Focused"],
            ["03", "Practical Learning"],
            ["04", "Career Ready"],
          ].map(([number, title]) => (
            <div
              key={number}
              className="rounded-3xl border border-sky-100 bg-sky-50/60 p-7 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-100"
            >
              <span className="text-sm font-bold text-sky-500">{number}</span>
              <h3 className="mt-8 text-xl font-bold">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-sky-500">
              How it works
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Simple. Practical. Focused.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              ["01", "Choose Your Skill", "Pick a course that matches your branch and interests."],
              ["02", "Learn Live", "Join live trainer-led classes and interact in real time."],
              ["03", "Build Practical Skills", "Practice concepts through practical learning."],
              ["04", "Become Career Ready", "Prepare your resume, interview skills and confidence."],
            ].map(([number, title, description]) => (
              <div key={number} className="rounded-3xl bg-white p-7 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500 font-bold text-white">
                  {number}
                </div>
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="font-bold uppercase tracking-widest text-sky-500">
            Explore courses
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Skills for where your branch can take you.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Choose from future-focused skill paths designed for different
            B.Tech branches.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100 studot-hover"
              
            >
              
              

              <h3 className="mt-6 text-xl font-bold group-hover:text-sky-600">
                {course.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {course.description}
              </p>

              <a
                href="#enroll"
                className="mt-6 inline-block font-bold text-sky-600"
              >
                Explore course →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Career Ready */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-14 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-bold uppercase tracking-widest text-sky-400">
                More than classes
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Learn. Practice. Prepare.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Studot combines live learning with practical support so
                students can build skills and confidence together.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-slate-200"
                >
                  <span className="mr-2 text-sky-400">✓</span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="enroll" className="bg-gradient-to-br from-sky-500 to-sky-600">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center text-white">
          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            Don&apos;t just graduate.
            <br />
            Grow beyond.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-sky-50">
            Start building the skills that can take your degree further.
          </p>

          <a
  href="/enroll"
  className="rounded-full bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-600"
>
  Enroll Now
</a>
            
        
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-black text-sky-600">Studot.</p>
            <p className="text-sm text-slate-500">Beyond the Degree</p>
          </div>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Studot. All rights reserved.
          </p>
        </div>
      </footer>
      </main>
    </>
  );
}
      