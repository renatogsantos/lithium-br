import "./globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>lithium</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
