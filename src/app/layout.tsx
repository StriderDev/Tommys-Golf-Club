import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tommy's Golf Club — Indoor TrackMan Studio",
  description: "Premium indoor golf on TrackMan. Easy booking, flexible hours, memberships and lessons.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
