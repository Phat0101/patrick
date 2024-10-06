import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

export function validateString(input: unknown, maxLength: number): boolean {
  return typeof input === 'string' && input.length > 0 && input.length <= maxLength;
}