import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tourist } from '@/lib/definitions';
import { User, Mail, Phone, Plane, Calendar, MapPin, Heart, ShieldQuestion } from 'lucide-react';
import { format } from 'date-fns';

async function getTouristData(id: string): Promise<Tourist | null> {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9002';
        const res = await fetch(`${baseUrl}/api/tourist/data/${id}`, { cache: 'no-store' });
        if (!res.ok) return null;
        return res.json();
    } catch (error) {
        console.error("Failed to fetch tourist data", error);
        return null;
    }
}

function InfoRow({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value?: string }) {
    if (!value) return null;
    return (
        <div className="flex items-start gap-4">
            <Icon className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
            <div className="flex flex-col">
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="font-medium text-foreground">{value}</p>
            </div>
        </div>
    );
}

export default async function TouristIdPage({ params }: { params: { id: string } }) {
  const tourist = await getTouristData(params.id);

  if (!tourist) {
    notFound();
  }

  const travelDates = tourist.travelStartDate && tourist.travelEndDate 
    ? `${format(new Date(tourist.travelStartDate), 'MMM dd, yyyy')} - ${format(new Date(tourist.travelEndDate), 'MMM dd, yyyy')}`
    : 'N/A';
  
  return (
    <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 grid gap-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><User className="w-6 h-6 text-primary" /> Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
                    <InfoRow icon={User} label="Full Name" value={tourist.fullName} />
                    <InfoRow icon={ShieldQuestion} label="Government ID" value={tourist.governmentId} />
                    <InfoRow icon={Mail} label="Email Address" value={tourist.email} />
                    <InfoRow icon={Phone} label="Phone Number" value={tourist.phoneNumber} />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Plane className="w-6 h-6 text-primary" /> Travel Details</CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
                    <InfoRow icon={MapPin} label="Destination" value={tourist.destination} />
                    <InfoRow icon={Calendar} label="Travel Dates" value={travelDates} />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Heart className="w-6 h-6 text-primary" /> Emergency Contact</CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
                    <InfoRow icon={User} label="Contact Name" value={tourist.emergencyContactName} />
                    <InfoRow icon={Phone} label="Contact Phone" value={tourist.emergencyContactPhone} />
                </CardContent>
            </Card>
        </div>
        <div className="lg:col-span-1">
             <Card className="sticky top-24 text-center shadow-lg">
                <CardHeader>
                    <CardTitle>Your Digital Pass</CardTitle>
                    <CardDescription>Present this QR code at checkpoints.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center gap-4">
                    <div className="p-4 bg-white rounded-lg border">
                        <Image
                            src={tourist.qrCodeUrl}
                            alt="Tourist QR Code"
                            width={256}
                            height={256}
                            priority
                            className="max-w-full h-auto"
                        />
                    </div>
                    <Separator />
                    <p className="text-lg font-semibold">{tourist.fullName}</p>
                    <p className="text-xs text-muted-foreground break-all px-2">{tourist.id}</p>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
