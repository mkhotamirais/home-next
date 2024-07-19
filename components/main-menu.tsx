"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronUp } from "lucide-react";
import { useMm } from "@/hooks/useMm";

const menu = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/shadcn", label: "Shadcn" },
  { href: "/upload-image", label: "Upload Image" },
];

export function MainMenu() {
  const { mm, toggleMm } = useMm();
  return (
    <div
      className={`${
        mm ? "translate-y-0" : "translate-y-full"
      } transition-all z-50 bg-white/15 backdrop-blur fixed bottom-0 left-0 right-0 rounded-t-xl`}
    >
      <Button
        onMouseEnter={() => {
          toggleMm();
        }}
        variant={mm ? "default" : "ghost"}
        size="icon"
        className={`${
          mm ? "rotate-180" : "rotate-0"
        } absolute -translate-y-full left-1/2 -translate-x-1/2 rounded-full transition-all`}
      >
        <ChevronUp className="h-4 w-4" />
      </Button>
      <div className="flex flex-col">
        <div className="bg-black/15 rounded-xl flex justify-between items-center p-3">
          <Button asChild size="sm">
            <Link href="/">Logo</Link>
          </Button>
          <div>right</div>
        </div>
        <div className="bg-black/10 m-2 p-3 h-[30vh] rounded overflow-y-scroll">
          <div className="grid grid-cols-2">
            {menu.map((item, index) => (
              <Button
                onClick={() => {
                  if (mm) toggleMm();
                }}
                key={index}
                variant="link"
                asChild
                className="flex justify-start"
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
