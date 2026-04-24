import { ChevronLeft } from "lucide-react";
import { ReactNode } from "react";

export type BackButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

export const BackButton = ({ onClick, children }: BackButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
    >
      <ChevronLeft size={20} />
      <span>{children}</span>
    </button>
  );
};
