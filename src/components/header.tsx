import { UserNav } from "@/components/user-nav";
import Link from "next/link";
import { QrCode } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card">
      <div className="container flex h-16 items-center px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 mr-auto">
            <QrCode className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold">VisitPass</span>
        </Link>
        <UserNav />
      </div>
    </header>
  );
}
