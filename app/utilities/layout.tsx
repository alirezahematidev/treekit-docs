import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treekit | utilities",
  description: "Treekit utilities",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col w-full h-full bg-[#141414]">
      <header>
        <Header />
      </header>
      <article className="flex flex-col flex-1 w-full max-w-none prose dark:prose-invert p-8">{children}</article>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
