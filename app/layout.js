import Header from "@/components/layout/header";
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
      </body>
    </html>
  );
}
