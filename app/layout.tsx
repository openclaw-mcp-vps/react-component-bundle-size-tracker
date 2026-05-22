import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "React Component Bundle Size Tracker",
  description: "Track how each React component affects your bundle size and get suggestions for lighter alternatives."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="75a0570b-31de-4f43-ae6d-e7b0ca51376b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
