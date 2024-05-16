import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full h-[50px] bg-[#1f1f1f] px-4 border-b border-[#292929] flex flex-row items-center justify-end">
      <Link href="https://github.com/alirezahematidev/treekit" target="_blank">
        <Image src="/github.svg" width={20} height={20} alt="github" className="object-contain" priority />
      </Link>
    </div>
  );
}
