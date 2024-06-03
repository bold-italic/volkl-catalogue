import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";

export const metadata = {
  title: "Völkl Ski",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
