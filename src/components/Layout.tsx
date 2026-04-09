import type { ReactNode } from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import WhatsAppFab from "./WhatsAppFab";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="app-layout">
      <Topbar />
      <Navbar />
      <main className="flex-1 flex flex-col min-h-0">{children}</main>
      <WhatsAppFab />
    </div>
  );
}
