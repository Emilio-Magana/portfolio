import type { Message } from "ai/react";
import { TiTrash } from "react-icons/ti";
import { IoEnter } from "react-icons/io5";

interface ChatInputProps {
  input: string;
  handleSubmit: (event?: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  setMessages: (
    messages: Message[] | ((messages: Message[]) => Message[]),
  ) => void;
  // status: "submitted" | "streaming" | "ready" | "error";
  messages: Message[];
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function ChatInput({
  input,
  handleSubmit,
  handleInputChange,
  setMessages,
  messages,
  setInput,
}: ChatInputProps) {
  function handleDelete() {
    setMessages([]);
    setInput("");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between gap-1 border-t border-skillBr px-1 py-1"
    >
      <button
        onClick={handleDelete}
        className="items-baseline rounded-md px-1 disabled:cursor-not-allowed"
        disabled={messages.length < 0 || input.length < 0}
      >
        <TiTrash size={20} className="text-rose-500" />
      </button>
      <input
        autoFocus
        className="w-full place-items-baseline rounded-md border border-skillBr bg-inherit p-1 text-secondary"
        placeholder="Ask me something :3!"
        value={input}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSubmit();
          }
        }}
      />
      <button
        className="px-2 py-2 disabled:cursor-not-allowed"
        disabled={input.length === 0}
        type="submit"
      >
        <IoEnter size={20} />
      </button>
    </form>
  );
}
