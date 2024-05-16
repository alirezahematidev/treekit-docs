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
    description: `Treekit - ${slug} function`,
  };
}

export default async function Page({ params: { slug } }: PageProps) {
  if (!slug) notFound();

  const { default: Component } = await import(`@/articles/${slug}.mdx`);

  return <Component />;
}
