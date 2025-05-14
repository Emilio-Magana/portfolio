import { useChat } from "@ai-sdk/react";
import { useChatBot } from "../../context/ChatContext";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import Accordion from "../../ui/Accordion";

export default function Chat() {
  const { isVisible } = useChatBot();
  const {
    messages,
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat();

  return (
    <div className="fixed z-40 flex flex-col transition-all duration-300 phone:bottom-3 phone:right-3 ipad_mini:bottom-7 ipad_mini:right-7">
      {isVisible && (
        <Accordion>
          <ChatMessages
            messages={messages}
            error={error}
            isLoading={isLoading}
          />
          <ChatInput
            input={input}
            setInput={setInput}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            setMessages={setMessages}
            messages={messages}
          />
        </Accordion>
      )}
    </div>
  );
}
