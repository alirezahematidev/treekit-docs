import { lazyImport } from "@/utils/lazyImport";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: PageProps): Promise<Metadata> {
  return {
    title: `Treekit | ${slug}`,
    description: `Treekit - ${slug}`,
  };
}

export default async function Page({ params: { slug } }: PageProps) {
  if (!slug) notFound();

  const Component = await lazyImport("guide", slug);

  return (
    <article className="flex flex-col flex-1 w-full max-w-none font-inter-regular text-[14px] prose dark:prose-invert p-8 pl-[150px]">
      <Component />
    </article>
  );
}
