import "./globals.css";
import { geistMono, geistSans } from "@/components/Fonts";


export const metadata = {
  title: "Dental website homepage",
  description: "A Dental website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body
      className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
