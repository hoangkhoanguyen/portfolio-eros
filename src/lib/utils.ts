import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { marked } from "marked";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Chuyển đổi chuỗi markdown sang HTML string
 * @param markdown - Chuỗi markdown
 * @returns HTML string
 */
export function markdownToHtml(markdown: string): Promise<string> | string {
  return marked.parse(markdown);
}
