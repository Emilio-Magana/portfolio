import type { Message } from "ai/react";
import { DeleteButton, SubmitButton } from "@/ui/Buttons";
import Input from "@/ui/Input";

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
  const isSubmitDisabled = input.length === 0;
  const isDeleteDisabled = messages.length === 0 && input.length === 0;
  function handleDelete() {
    setMessages([]);
    setInput("");
  }
  function handleOnKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between gap-1 border-t border-skillBr px-1 py-1"
    >
      <DeleteButton
        onClickDelete={handleDelete}
        isDeleteDisabled={isDeleteDisabled}
      />
      <Input
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleOnKeyDown}
      />
      <SubmitButton isSubmitDisabled={isSubmitDisabled} />
    </form>
  );
}
