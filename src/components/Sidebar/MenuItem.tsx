import Link from "next/link";
import type { TMenuItemProps } from "./types";

function MenuItem({ icon, label, path }: TMenuItemProps) {
  const Icon = icon;

  return (
    <li>
      <Link
        href={path}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <Icon />
        <span className="ms-3">{label}</span>
      </Link>
    </li>
  );
}

export default MenuItem;
