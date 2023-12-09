import { MENU_ITEMS } from "@common/constants/menu";
import MenuItem from "./MenuItem";

function Sidebar() {
  return (
    <aside
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 dark:bg-gray-800"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {MENU_ITEMS.map((item) => (
            <MenuItem key={item.label} {...item} />
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
