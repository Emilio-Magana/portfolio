import { Message } from "ai";
import { TbLoader3 } from "react-icons/tb";
import { MdPrecisionManufacturing } from "react-icons/md";
import ChatMessage from "./ChatMessage";
import { useEffect, useRef } from "react";

interface MessagesProps {
  messages: Message[];
  error: Error | undefined;
  isLoading: boolean;
}

export default function ChatMessages({
  messages,
  error,
  isLoading,
}: MessagesProps) {
  const isLastMessageUser = messages[messages.length - 1]?.role === "user";

  // Scroll to new messages automatically
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      className="h-full overflow-y-auto border-t border-skillBr p-3"
      ref={scrollRef}
    >
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            <ChatMessage message={msg} />
          </li>
        ))}
      </ul>

      {/* empty chat*/}
      {!error && messages.length === 0 && (
        <div className="mt-16 flex h-full flex-col items-center justify-center gap-2">
          <MdPrecisionManufacturing />
          <p className="font-medium">Send a message to start the chat!</p>
          <p className="text-muted-foreground text-center text-xs">
            You can ask the bot anything about me and it will help to find all
            pertinent information!
          </p>
        </div>
      )}

      {/* loading */}
      {isLoading && isLastMessageUser && (
        <div className="flex items-center justify-center">       
          <TbLoader3 className="text-muted-foreground mr-1.5 size-3 animate-spin" />
          <p className="text-muted-foreground text-center text-xs">
            Thinking...
          </p>
        </div>
      )}

      {/* error */}
      {error && (
        <p className="text-center text-xs text-rose-500">
          Something went wrong. Please try again!
        </p>
      )}
    </div>
  );
}
