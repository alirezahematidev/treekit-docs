"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@/icons";
import { Render } from "@/utils/render";
import { useNeighbors } from "./useNeighbors";

export default function Footer() {
  const [previous, next] = useNeighbors();

  return (
    <div className="flex mt-auto p-4 w-full flex-row justify-between items-center gap-4">
      <Render when={previous} fallback={<div className="flex flex-1" />}>
        <Link href={previous?.slug} className="flex flex-1">
          <div className="bg-[#1f1f1f] hover:bg-[#222222] transition-colors flex flex-1 px-4 py-6 group rounded shadow-sm cursor-pointer">
            <div className="flex flex-row items-center justify-between w-full">
              <ArrowLeft className="stroke-[#c9c9c9] group-hover:stroke-white transition-colors" />
              <h4 className="text-[#c9c9c9]  group-hover:text-white transition-colors">{previous?.title}</h4>
            </div>
          </div>
        </Link>
      </Render>

      <Render when={next} fallback={<div className="flex flex-1" />}>
        <Link href={next?.slug} className="flex flex-1">
          <div className="bg-[#1f1f1f] hover:bg-[#222222] transition-colors flex flex-1 px-4 py-6 group rounded shadow-sm cursor-pointer">
            <div className="flex flex-row items-center justify-between w-full">
              <h4 className="text-[#c9c9c9]  group-hover:text-white transition-colors">{next?.title}</h4>
              <ArrowRight className="stroke-[#c9c9c9] group-hover:stroke-white transition-colors" />
            </div>
          </div>
        </Link>
      </Render>
    </div>
  );
}
