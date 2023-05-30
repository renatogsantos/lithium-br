"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import "./globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>lithium</title>
      </head>
      <ParallaxProvider>
        <body>{children}</body>
      </ParallaxProvider>
    </html>
  );
}
