import Header from "@/components/layout/header";
import HeaderNested from "@/components/layout/header-nested";
import "./globals.css";

export const metadata = {
  title: "Völkl Ski",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        <HeaderNested />
        {children}
      </body>
    </html>
  );
}
