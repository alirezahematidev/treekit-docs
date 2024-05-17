import type { Metadata } from "next";
import { InterLocal } from "@/font/local";
import Sidebar from "@/components/sidebar";
import Details from "@/components/details";
import "./globals.css";

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
        <main className="flex flex-row w-full min-h-screen">
          <aside>
            <Sidebar />
          </aside>
          {children}
          <aside>
            <Details />
          </aside>
        </main>
      </body>
    </html>
  );
}
