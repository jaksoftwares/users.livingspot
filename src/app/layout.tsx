
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import "@/styles/globals.css";
import Footer from "./footer";

export default function LandlordLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-4">{children}</main>
        <Footer/>
      </div>
    </div>
     </body>
    </html>
  );
}
