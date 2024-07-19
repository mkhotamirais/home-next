"use client";

import { Button } from "@/components/ui/button";
import { useMm } from "@/hooks/useMm";

export default function Home() {
  const { mm, showMm } = useMm();
  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-4">
      <h1>welcome, i am khotami, i am a web developer, my focus is react/next</h1>
      <div className="flex gap-2">
        <Button>About Me</Button>
        <Button onClick={showMm}>Explore</Button>
      </div>
    </div>
  );
}
