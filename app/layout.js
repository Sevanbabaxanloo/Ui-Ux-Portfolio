import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Need designer?",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body
        className={`${montserrat.className} min-h-full flex flex-col items-center`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}