import SidebarTree from "./tree";
import schema from "@/schema/schema.json";

export default function Sidebar() {
  return (
    <div className="flex flex-col min-w-[250px] w-full h-full px-4 border-r border-[#292929]">
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
