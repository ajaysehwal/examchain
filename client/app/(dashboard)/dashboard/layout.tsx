import NavBar from "@/components/Navs/navbar";
import SideBar from "@/components/Navs/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TooltipProvider>
      <main className="w-full h-full flex flex-row overflow-hidden">
        <SideBar />
        <section className="flex flex-col overflow-hidden flex-1 bg-white gap-5">
          <NavBar />
          {children}
        </section>
      </main>
    </TooltipProvider>
  );
}
