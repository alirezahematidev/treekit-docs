"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

type SidebarTreeSchema = {
  title: string;
  slug: string;
  children?: SidebarTreeSchema[];
};

interface SidebarTreeProps {
  schema: SidebarTreeSchema[];
  root?: string | null;
}

export default function SidebarTree({ schema, root = null }: SidebarTreeProps) {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col gap-[2px]">
      {schema.map((item) => {
        if (item.children && item.children.length !== 0) {
          return (
            <div key={item.slug} className="flex flex-col">
              <h4 className="mt-4 mb-2 font-inter-medium font-medium text-white capitalize">{item.title}</h4>
              <SidebarTree schema={item.children} root={root ? `${root}/${item.slug}` : item.slug} />
            </div>
          );
        }

        return (
          <Link key={item.slug} href={root ? `/${root}/${item.slug}` : item.slug}>
            <div className={twMerge("flex flex-row items-center hover:bg-[#292929] group transition-colors py-[6px] rounded-sm", item.slug === slug && "bg-[#292929]")}>
              <p className={twMerge("indent-4 text-pretty text-[14px] font-inter-regular text-[#c9c9c9] group-hover:text-white", item.slug === slug && "text-white")}>
                {item.title}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
