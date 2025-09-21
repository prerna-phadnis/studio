'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import jsQR from 'jsqr';
import { getTouristData } from '@/services/api';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Upload, User, Phone, MapPin, ShieldAlert } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AdminDashboard() {
  const router = useRouter();
  const { toast } = useToast();
  const [touristData, setTouristData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [authToken, setAuthToken] = useState<string | null>(null);

  useEffect(() => {
    // Protected route: check for auth token
    const token = localStorage.getItem('adminAuthToken');
    if (!token) {
      router.push('/admin/login');
    } else {
      setAuthToken(token);
    }
  }, [router]);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !authToken) return;

    setIsLoading(true);
    setError(null);
    setTouristData(null);

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const image = new Image();
        image.onload = async () => {
          const canvas = document.createElement('canvas');
          canvas.width = image.width;
          canvas.height = image.height;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            throw new Error('Could not get canvas context');
          }
          ctx.drawImage(image, 0, 0);
          const imageData = ctx.getImageData(0, 0, image.width, image.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height);

          if (code) {
            // The QR code contains a JSON string, so we need to parse it.
            let touristId;
            try {
                const qrData = JSON.parse(code.data);
                touristId = qrData.id;
                if (!touristId) {
                    throw new Error("QR code does not contain an 'id' field.");
                }
            } catch (parseError) {
                // If parsing fails, assume the QR code data is the ID itself.
                touristId = code.data;
            }
            
            const data = await getTouristData(touristId, authToken);
            setTouristData(data);
          } else {
            throw new Error('Could not decode QR code. Please try a clearer image.');
          }
        };
        image.src = e.target?.result as string;
      } catch (err: any) {
        setError(err.message || 'Failed to process QR code.');
        toast({
            variant: 'destructive',
            title: 'Error',
            description: err.message || 'Failed to process QR code.'
        });
      } finally {
        setIsLoading(false);
      }
    };
    reader.readAsDataURL(file);
  };
  
  const handleLogout = () => {
    localStorage.removeItem('adminAuthToken');
    router.push('/admin/login');
  };

  if (!authToken) {
      return (
         <div className="flex items-center justify-center h-full">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      );
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
       <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button onClick={handleLogout} variant="outline">Logout</Button>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Decode Tourist QR Code</CardTitle>
          <CardDescription>Upload a QR code image to retrieve tourist information.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="qr-code-upload">Upload QR Code</Label>
            <Input id="qr-code-upload" type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
          </div>
          <Button onClick={() => fileInputRef.current?.click()} className="mt-4">
            <Upload className="mr-2 h-4 w-4" />
            Select Image
          </Button>
        </CardContent>
      </Card>
      
      {isLoading && (
        <div className="flex items-center justify-center my-8">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="ml-2">Decoding and fetching data...</p>
        </div>
      )}

      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {touristData && (
        <Card className="shadow-lg animate-in fade-in-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl"><User /> Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div><strong className="font-medium">Full Name:</strong> {touristData.personal_info.full_name}</div>
            <div><strong className="font-medium">Date of Birth:</strong> {new Date(touristData.personal_info.date_of_birth).toLocaleDateString()}</div>
            <div><strong className="font-medium">Gender:</strong> {touristData.personal_info.gender}</div>
            <div><strong className="font-medium">Nationality:</strong> {touristData.personal_info.nationality}</div>
            <div><strong className="font-medium">Government ID:</strong> {touristData.government_id.id_type} - {touristData.government_id.id_number}</div>
          </CardContent>

          <CardHeader>
             <CardTitle className="flex items-center gap-2 text-xl"><Phone /> Contact Details</CardTitle>
          </CardHeader>
           <CardContent className="grid md:grid-cols-2 gap-4">
              <div><strong className="font-medium">Email:</strong> {touristData.contact_details.email}</div>
              <div><strong className="font-medium">Phone:</strong> {touristData.contact_details.mobile_number}</div>
           </CardContent>

          <CardHeader>
             <CardTitle className="flex items-center gap-2 text-xl"><MapPin /> Travel Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             {touristData.travel_details.trip_itinerary.map((trip: any, index: number) => (
                <div key={index} className="p-3 border rounded-md bg-muted/50">
                    <p><strong className="font-medium">City:</strong> {trip.city}</p>
                    <p><strong className="font-medium">Check-in:</strong> {new Date(trip.check_in).toLocaleDateString()}</p>
                    <p><strong className="font-medium">Check-out:</strong> {new Date(trip.check_out).toLocaleDateString()}</p>
                    <p><strong className="font-medium">Accommodation:</strong> {trip.accommodation}</p>
                </div>
            ))}
          </CardContent>
          
           <CardHeader>
             <CardTitle className="flex items-center gap-2 text-xl"><ShieldAlert />Emergency Contact</CardTitle>
          </CardHeader>
          <CardContent>
             {touristData.emergency_info.contacts.map((contact: any, index: number) => (
                 <div key={index} className="p-3 border rounded-md bg-muted/50">
                    <p><strong className="font-medium">Name:</strong> {contact.name}</p>
                    <p><strong className="font-medium">Relationship:</strong> {contact.relationship}</p>
                    <p><strong className="font-medium">Phone:</strong> {contact.mobile_number}</p>
                </div>
            ))}
          </CardContent>

        </Card>
      )}
    </div>
  );
}
