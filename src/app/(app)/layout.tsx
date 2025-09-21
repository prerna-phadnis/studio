import Header from "@/components/header";
import AppSidebar from "@/components/app-sidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      <Header />
      <div className="flex-1">
        <div className="container mx-auto grid md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-8 py-8 px-4 md:px-8">
          <aside className="hidden md:block">
            <AppSidebar />
          </aside>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
