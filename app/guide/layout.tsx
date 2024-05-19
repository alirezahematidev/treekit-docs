import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treekit | functions",
  description: "Treekit funcitons",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col w-full h-full bg-[#141414] px-[300px]">
      <header>
        <Header />
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
