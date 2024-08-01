// app/layout.tsx
"use client"; // Add this directive to indicate it's a client component

import { Inter } from "next/font/google";
import "./globals.css";
import { firebaseConfig } from "@/firebase"; // Ensure this path is correct
import { FirebaseAppProvider } from "reactfire";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </FirebaseAppProvider>
  );
}
