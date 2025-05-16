import { sourceIcons } from "@/config/icons";
import { iconSizeMap } from "../config/sizes";
import { IoEnter } from "react-icons/io5";
import { TiTrash } from "react-icons/ti";

function SubmitButton({ isSubmitDisabled }: { isSubmitDisabled: boolean }) {
  return (
    <button
      className="px-2 py-2 disabled:cursor-not-allowed"
      disabled={isSubmitDisabled}
      type="submit"
    >
      <IoEnter size={20} />
    </button>
  );
}
interface DeleteProps {
  onClickDelete: () => void;
  isDeleteDisabled: boolean;
}
function DeleteButton({ onClickDelete, isDeleteDisabled }: DeleteProps) {
  return (
    <button
      onClick={onClickDelete}
      className="items-baseline rounded-md px-1 disabled:cursor-not-allowed"
      disabled={isDeleteDisabled}
    >
      <TiTrash size={20} className="text-rose-500" />
    </button>
  );
}
interface SourceProps {
  links: {
    href: string;
    name: string;
    size: string;
  }[];
}
function SourceButtons({ links }: SourceProps) {
  return (
    <div className="flex justify-start gap-1">
      {links.map((link, id) => {
        const SourceIcon = sourceIcons[link.name as keyof typeof sourceIcons];
        const iconSize = iconSizeMap[link.size];

        return (
          <a
            key={id}
            href={link.href}
            target="_blank"
            className="flex items-center gap-1 rounded-lg bg-primary p-1 text-sm font-semibold text-opposite duration-500"
          >
            <SourceIcon size={iconSize} />
            <span>{link.name}</span>
          </a>
        );
      })}
    </div>
  );
}

export { SubmitButton, DeleteButton, SourceButtons };
