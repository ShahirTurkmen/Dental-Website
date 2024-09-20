import localFont from "next/font/local";
const Manrope = localFont({
  src: "../app/fonts/Manrope-Regular.ttf",
  variable: "--font-Manrope",
  weight: "400",
});

const ManropeBold = localFont({
  src: "../app/fonts/Manrope-Bold.ttf",
  variable: "--font-Manrope",
  weight: "400",
});

const Archivo = localFont({
  src: "../app/fonts/Archivo-Regular.ttf",
  variable: "--font-Archivo",
  weight: "400",
});

const geistSans = localFont({
  src: "../app/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export {
    Manrope,
    ManropeBold,
    Archivo,
    geistMono,
    geistSans
}