import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";
import React from "react";
import { Popover, PopoverContent, PopoverHeader, PopoverTitle, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui";

interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer",
        className,
      )}
    >
      <ArrowUpDown size={16} />
      <b>Сортировка по:</b>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="link" className="font-extrabold">рейтингу</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle> алфавиту</PopoverTitle>
            <PopoverTitle> популярности</PopoverTitle>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </div>
  );
};
