import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, QrCode } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image-1');

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-primary">
            <QrCode className="h-7 w-7" />
            <span className="text-2xl">VisitPass</span>
        </Link>
      </header>
      <main className="flex-grow container mx-auto px-4">
        <section className="grid md:grid-cols-2 gap-12 items-center py-12 md:py-24">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground font-headline">
              Your Digital Identity for Seamless Travel
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
              Register once and breeze through checkpoints with a single QR code.
              VisitPass simplifies your journey, keeping your information secure
              and accessible.
            </p>
            <Button asChild size="lg" className="text-lg py-7 px-8">
              <Link href="/register">
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="flex justify-center">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={600}
                height={450}
                className="rounded-xl shadow-2xl aspect-[4/3] object-cover"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            )}
          </div>
        </section>
      </main>
      <footer className="text-center text-sm text-muted-foreground p-6">
        © {new Date().getFullYear()} VisitPass. All rights reserved.
      </footer>
    </div>
  );
}
