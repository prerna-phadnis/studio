'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import {
  QrCode,
  UserPlus,
  Fingerprint
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const menuOptions = [
    { name: "Register", icon: UserPlus, href: "/" },
    { name: "Digital Identity", icon: Fingerprint, href: "/identity" },
];

export default function AppSidebar() {
    const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 bg-card border-r">
        <div className="flex items-center justify-center h-20 border-b">
            <Link href="/" className="flex items-center gap-2 font-bold text-primary">
                <QrCode className="h-7 w-7" />
                <span className="text-2xl">VisitPass</span>
            </Link>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
        {menuOptions.map((option) => {
          const Icon = option.icon;
          const isActive = pathname === option.href;
          return (
            <Link
              key={option.name}
              href={option.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-foreground transition-all hover:bg-accent hover:text-accent-foreground ${isActive ? 'bg-accent font-semibold' : ''}`}
            >
              <Icon className="h-5 w-5" />
              {option.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
