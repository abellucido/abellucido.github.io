"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
];

type NavbarProps = {
  id: string;
  visibleClass: string;
  onNavigate: () => void;
};

export default function Navbar({ id, visibleClass, onNavigate }: NavbarProps) {
  // Static export adds trailing slashes, so "/projects/" must match "/projects".
  const pathname = usePathname().replace(/(.)\/$/, "$1");

  return (
    <aside
      id={id}
      className={`fixed inset-y-0 left-0 z-40 flex w-60 flex-col border-r border-line bg-surface px-5 pt-20 pb-6 transition-transform duration-200 ${visibleClass}`}
    >
      <Link
        href="/"
        onClick={onNavigate}
        className="text-lg font-semibold leading-tight"
      >
        {profile.name}
      </Link>
      <p className="mt-1 text-sm text-muted">{profile.role}</p>

      <nav className="mt-8 flex flex-col gap-1 text-sm">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={`rounded-md px-3 py-2 transition-colors ${
                active
                  ? "bg-accent font-medium text-white"
                  : "text-muted hover:bg-chip hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
