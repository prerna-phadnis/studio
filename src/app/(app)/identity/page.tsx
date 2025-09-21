'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

export default function IdentityPage() {
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [touristId, setTouristId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Data is retrieved from localStorage on the client side.
    const storedId = localStorage.getItem('touristId');
    const storedQr = localStorage.getItem('qrCodeUrl');
    
    setTouristId(storedId);
    setQrCodeUrl(storedQr);
    setIsLoading(false);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Digital Identity</CardTitle>
          <CardDescription>Your personal VisitPass QR Code</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center gap-4 pt-4">
          {isLoading ? (
            <div className="flex flex-col items-center gap-4 w-full">
                <Skeleton className="w-[288px] h-[288px] rounded-lg" />
                <Skeleton className="h-6 w-3/4 rounded-md" />
                <Skeleton className="h-4 w-full rounded-md" />
            </div>
          ) : qrCodeUrl && touristId ? (
            <>
              <div className="p-4 bg-white rounded-lg border">
                <Image
                  src={qrCodeUrl}
                  alt="Your Digital Pass QR Code"
                  width={256}
                  height={256}
                  priority
                  className="max-w-full h-auto"
                />
              </div>
              <p className="text-sm text-muted-foreground break-all px-2">
                ID: {touristId}
              </p>
            </>
          ) : (
             <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>No Digital Pass Found</AlertTitle>
              <AlertDescription>
                Please complete the registration form to generate your digital pass.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
