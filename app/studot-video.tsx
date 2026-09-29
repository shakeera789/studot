"use client";

import { useEffect, useState } from "react";

export default function IntroVideo() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!showIntro) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white">
      <video
        src="/studot-video.mp4"
        autoPlay
        muted
        playsInline
        className="h-full w-full object-cover"
      />
    </div>
  );
}