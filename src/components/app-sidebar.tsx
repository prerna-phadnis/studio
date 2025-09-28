'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import {
  QrCode,
  UserPlus,
  Fingerprint,
  Settings,
  PanelLeft,
  Shield,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useI18n } from '@/locales/client';

export default function AppSidebar() {
    const pathname = usePathname();
    const t = useI18n();

    const menuOptions = [
        { name: t('sidebar.register'), icon: UserPlus, href: "/" },
        { name: t('sidebar.digitalIdentity'), icon: Fingerprint, href: "/identity" },
        { name: t('sidebar.admin'), icon: Shield, href: "/admin/login" },
    ];


  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <TooltipProvider>
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <Link
              href="#"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <QrCode className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">VisitPass</span>
            </Link>
            {menuOptions.map((option) => {
                const Icon = option.icon;
                const isActive = pathname.startsWith(option.href);
                return (
                    <Tooltip key={option.name}>
                        <TooltipTrigger asChild>
                        <Link
                            href={option.href}
                            className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${isActive ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
                        >
                            <Icon className="h-5 w-5" />
                            <span className="sr-only">{option.name}</span>
                        </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">{option.name}</TooltipContent>
                    </Tooltip>
                )
            })}
          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">{t('sidebar.settings')}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{t('sidebar.settings')}</TooltipContent>
            </Tooltip>
          </nav>
        </TooltipProvider>
      </aside>
       <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">{t('sidebar.toggleMenu')}</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
              >
                <QrCode className="h-5 w-5 transition-all group-hover:scale-110" />
                <span className="sr-only">VisitPass</span>
              </Link>
               {menuOptions.map((option) => {
                const Icon = option.icon;
                const isActive = pathname.startsWith(option.href);
                return (
                    <Link
                        key={option.name}
                        href={option.href}
                        className={`flex items-center gap-4 px-2.5 ${isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                        <Icon className="h-5 w-5" />
                        {option.name}
                    </Link>
                )
            })}
            </nav>
          </SheetContent>
        </Sheet>
    </>
  );
}
