import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/shared/lib/utils";

export type Props = {
  currentPage: number;
  totalItems: number;
  limit: number;
  isPlaceholderData?: boolean;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  currentPage,
  totalItems,
  limit,
  isPlaceholderData,
  onPageChange,
}: Props) => {
  const isPrevPageDisabled = currentPage === 1 || totalItems < limit;
  const isNextPageDisabled = limit * currentPage >= totalItems;

  const handlePrevClick = () => {
    !isPrevPageDisabled && onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    !isNextPageDisabled && onPageChange(currentPage + 1);
  };

  return (
    <div
      className={cn(
        "flex items-center gap-2",
        isPlaceholderData && "opacity-50 pointer-events-none",
      )}
    >
      <button
        className="p-2 border rounded-lg hover:bg-gray-50 disabled:opacity-30"
        disabled={isPrevPageDisabled}
        onClick={handlePrevClick}
      >
        <ChevronLeft size={20} />
      </button>
      <span className="text-sm font-medium px-4">
        Страница <span className="font-bold">{currentPage}</span>
      </span>
      <button
        className="p-2 border rounded-lg hover:bg-gray-50 disabled:opacity-30"
        disabled={isNextPageDisabled}
        onClick={handleNextClick}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};
