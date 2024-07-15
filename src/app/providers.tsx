"use client";
import { CategoryProvider } from "@/context/category";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CategoryProvider>{children}</CategoryProvider>
    </ThemeProvider>
  );
}
