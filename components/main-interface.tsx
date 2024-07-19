"use client";

import { useMm } from "@/hooks/useMm";
import React from "react";

export default function MainInterface({ children }: { children: React.ReactNode }) {
  const { mm, hideMm } = useMm();
  return (
    <div onMouseEnter={hideMm} className="min-h-screen">
      {children}
    </div>
  );
}
