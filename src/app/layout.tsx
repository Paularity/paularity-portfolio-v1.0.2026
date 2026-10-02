import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Christian Decembrana — Frontend Tech Lead",
  description:
    "Frontend Tech Lead building reliable, efficient enterprise software across .NET, Next.js, Blazor, and Flutter.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-fg antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
