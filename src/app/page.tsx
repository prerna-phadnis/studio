import { RegistrationWizard } from '@/components/registration-wizard';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { QrCode } from 'lucide-react';
import AppSidebar from '@/components/app-sidebar';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      <main className="flex-1 p-4 sm:p-6 md:p-8 bg-muted/40">
        <div className="flex items-center justify-center h-full">
          <Card className="w-full max-w-2xl shadow-xl">
            <CardHeader className="text-center border-b pb-6">
              <div className="flex justify-center items-center gap-2 mb-2">
                <QrCode className="w-8 h-8 text-primary" />
                <CardTitle className="text-3xl font-bold">VisitPass Registration</CardTitle>
              </div>
              <CardDescription>Complete the steps below to create your digital travel pass.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <RegistrationWizard />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
