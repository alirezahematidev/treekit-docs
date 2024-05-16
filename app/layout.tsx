import type { Metadata } from "next";
import Sidebar from "@/components/sidebar";
import "./globals.css";
import { InterLocal } from "@/font/local";

export const metadata: Metadata = {
  title: "Treekit",
  description: "A superpower tool to manage and handle nested tree data in javascript",
  authors: [{ name: "Alireza Hemati", url: "https://frontstudio.dev" }],
  keywords: ["treekit", "tree", "javascript", "data structure"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={InterLocal.className}>
        <aside>
          <Sidebar />
        </aside>
        {children}
      </body>
    </html>
  );
}
