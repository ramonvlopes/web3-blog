import { ListIcon, NewIcon, GithubIcon } from "@components/Icons";
import { TMenuItem } from "@models/menu.types";

export const MENU_ITEMS: TMenuItem[] = [
  {
    icon: ListIcon,
    label: "Home",
    path: "/"
  },
  {
    icon: NewIcon,
    label: "Create Post",
    path: "/new"
  },
  {
    icon: GithubIcon,
    label: "Code",
    path: "/"
  },
];
