"use client";

import { ThemeProvider } from "next-themes";
import { ChatProvider } from "../context/ChatContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem attribute="class" defaultTheme="system">
      <ChatProvider>{children}</ChatProvider>
    </ThemeProvider>
  );
}
