import localFont from "next/font/local";

export const outfit = localFont({
  src: "./fonts/Outfit-VariableFont_wght.ttf",
  variable: "--font-outfit",
  display: "swap",
  weight: "100 900",
});

export const switzer = localFont({
  src: [
    {
      path: "./fonts/Switzer-Variable.woff2",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "./fonts/Switzer-VariableItalic.woff2",
      style: "italic",
      weight: "100 900",
    },
  ],
  variable: "--font-switzer",
  display: "swap",
});
