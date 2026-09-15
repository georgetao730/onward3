import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onward3 — From Web2 Developer to Web3 Builder",
  description: "A structured, visual, and interactive path into Web3 for developers.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
