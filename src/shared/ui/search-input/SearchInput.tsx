import { Loader2, Search, X } from "lucide-react";
import { InputHTMLAttributes } from "react";

export type SearchInputProps = {
  isLoading?: boolean;
  onClear?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const SearchInput = ({
  value,
  isLoading,
  onClear,
  ...props
}: SearchInputProps) => {
  return (
    <div className="relative group w-full max-w-sm">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
        {isLoading ? (
          <Loader2 className="animate-spin text-blue-500" size={18} />
        ) : (
          <Search
            className="group-focus-within:text-blue-500 transition-colors"
            size={18}
          />
        )}
      </div>
      <input
        {...props}
        disabled={isLoading}
        value={value}
        className="w-full pl-10 pr-10 py-2.5 bg-white border border-gray-200 rounded-xl text-sm placeholder:text-gray-400 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-gray-300"
      />
      {value && onClear && !isLoading && (
        <button
          onClick={onClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5 rounded-md hover:bg-gray-100 transition-all"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};
