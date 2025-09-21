'use server';

import Link from "next/link";
import { getPersonalizedSidebarOptions } from "@/ai/flows/personalized-sidebar-options";
import {
  QrCode,
  FileText,
  PhoneForwarded,
  HelpCircle,
  MapPin,
  Compass,
  Languages,
  Landmark,
  CircleDollarSign,
  ShieldAlert,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "./ui/badge";

const iconMap: Record<string, LucideIcon> = {
  "Access QR Code": QrCode,
  "View Travel Details": FileText,
  "Update Emergency Contacts": PhoneForwarded,
  "Access Help/FAQs": HelpCircle,
  "Local Attractions": Landmark,
  "Transportation Options": Compass,
  "Language Translation": Languages,
  "Currency Converter": CircleDollarSign,
  "Emergency Services": ShieldAlert,
};

const defaultOptions = [
  "Access QR Code",
  "View Travel Details",
  "Update Emergency Contacts",
  "Access Help/FAQs",
];

export default async function AppSidebar() {
  const aiInput = {
    travelItinerary: "Visiting Paris from 2024-09-15 to 2024-09-22.",
    currentLocation: "Paris, France",
    touristPreferences: "Interested in museums and local cuisine."
  };

  let sidebarOptions: string[] = [];
  try {
    const personalizedOptions = await getPersonalizedSidebarOptions(aiInput);
    sidebarOptions = personalizedOptions.options.length > 0 ? personalizedOptions.options : defaultOptions;
  } catch (error) {
    console.error("Failed to get personalized sidebar options:", error);
    sidebarOptions = defaultOptions;
  }

  return (
    <nav className="sticky top-24 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold text-muted-foreground px-3">MENU</p>
        {sidebarOptions.map((option, index) => {
          const Icon = iconMap[option] || MapPin;
          return (
            <Link
              key={option}
              href="#"
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-foreground transition-all hover:bg-accent/80 ${index === 0 ? 'bg-accent/80 font-semibold' : 'hover:bg-accent/50'}`}
            >
              <Icon className="h-5 w-5" />
              {option}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col gap-2">
         <p className="text-sm font-semibold text-muted-foreground px-3 pt-2">CONTEXT</p>
         <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-foreground">
             <MapPin className="h-5 w-5" />
             <span>Location</span>
             <Badge variant="secondary" className="ml-auto">{aiInput.currentLocation.split(',')[0]}</Badge>
        </div>
      </div>
    </nav>
  );
}
