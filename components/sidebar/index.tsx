import SidebarTree from "./tree";
import schema from "@/schema/schema.json";

export default function Sidebar() {
  return (
    <div className="flex flex-col w-[300px]  h-full px-4 border-r border-[#292929] bg-[#1f1f1f] fixed z-50 top-0 left-0">
      <div className="w-full border-b border-[#292929] min-h-[50px] flex flex-row items-center">
        <h2 className="text-white capitalize font-bold">🌳 Treekit</h2>
      </div>

      <SidebarTree schema={schema} />

      <div className="mt-auto w-full flex items-center justify-center py-2">
        <span className="text-white text-[12px]">🌳 Save Trees</span>
      </div>
    </div>
  );
}
