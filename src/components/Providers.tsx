"use client";
import { DarkModeProvider } from "../context/DarkModeContext";
import { ChatProvider } from "../context/ChatContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DarkModeProvider>
      <ChatProvider>{children}</ChatProvider>
    </DarkModeProvider>
  );
}
