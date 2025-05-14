import { createContext, useContext, useState } from "react";

const ChatContext = createContext({
  isVisible: true,
  toggleChatbot: () => {},
});

function ChatProvider({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);

  function toggleChatbot() {
    setIsVisible((isVisible) => !isVisible);
  }
  return (
    <ChatContext.Provider value={{ isVisible, toggleChatbot }}>
      {children}
    </ChatContext.Provider>
  );
}

function useChatBot() {
  const context = useContext(ChatContext);
  if (context === undefined)
    throw new Error("ChatContext was used outside of ChatProvider");
  return context;
}

export { ChatProvider, useChatBot };
