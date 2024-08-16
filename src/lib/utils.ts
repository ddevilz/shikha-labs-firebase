import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const trimDescription = (
  description: string,
  maxWords: number
): string => {
  const words = description.split(" ");
  if (words.length <= maxWords) return description;
  return words.slice(0, maxWords).join(" ") + "...";
};
