"use client";

import Link from "next/link";

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
  return (
    <div className="flex flex-col">
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
            <div className="flex flex-row items-center hover:bg-[#292929] group transition-colors py-[6px] rounded-sm">
              <p className="indent-4 text-pretty text-[14px] font-inter-regular text-[#c9c9c9] group-hover:text-white">{item.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
