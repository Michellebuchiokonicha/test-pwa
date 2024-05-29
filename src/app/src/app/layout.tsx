import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Girls like me Africa",
  description: "Girls like me Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </head>
      <body
      //  className={inter.className}
      >{children}
        {/* <script>
          if('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
              navigator.serviceWorker.register('./serviceWorker');
            })
          }
        </script> */}
      </body>
    </html>
  );
}
