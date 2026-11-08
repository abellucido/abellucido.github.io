"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

const SIDEBAR_ID = "site-sidebar";
const DESKTOP_QUERY = "(min-width: 768px)";

// The sidebar starts open on desktop and closed on mobile. Each screen size
// keeps its own state, so the first render is the same on server and client.
export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [desktopHidden, setDesktopHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  function toggle() {
    if (window.matchMedia(DESKTOP_QUERY).matches) {
      setDesktopHidden((hidden) => !hidden);
    } else {
      setMobileOpen((open) => !open);
    }
  }

  const visibleClass = `${mobileOpen ? "translate-x-0" : "-translate-x-full"} ${
    desktopHidden ? "md:-translate-x-full" : "md:translate-x-0"
  }`;

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        aria-controls={SIDEBAR_ID}
        aria-label="Toggle navigation"
        className="fixed top-4 left-4 z-50 rounded-md border border-gray-200 bg-background p-2 text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <Navbar
        id={SIDEBAR_ID}
        visibleClass={visibleClass}
        onNavigate={() => setMobileOpen(false)}
      />

      {mobileOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
        />
      )}

      <div
        className={`flex flex-1 flex-col transition-[padding] duration-200 ${
          desktopHidden ? "" : "md:pl-60"
        }`}
      >
        {children}
      </div>
    </>
  );
}
