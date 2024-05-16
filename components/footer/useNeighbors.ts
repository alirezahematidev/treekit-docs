import { useParams } from "next/navigation";
import schema from "@/schema/schema.json";
import { useMemo } from "react";

type Neighbor = {
  slug: string;
  title: string;
};

export function useNeighbors(): Array<Neighbor> {
  const { slug } = useParams<{ slug: string }>();

  return useMemo(() => {
    const scope = schema.find(({ children = [] }) => children.some((child) => child.slug === slug));

    if (!scope) return [];

    const index = scope.children.findIndex((child) => child.slug === slug);

    const previous = scope.children[index - 1];
    const next = scope.children[index + 1];

    return [previous, next];
  }, [slug]);
}
