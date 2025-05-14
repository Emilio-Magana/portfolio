import { Message } from "ai";
import Link from "next/link";
import { MdPrecisionManufacturing } from "react-icons/md";
import Markdown from "react-markdown";

export default function ChatMessage({ message }: { message: Message }) {
  const { role, content } = message;
  const isBot = role === "assistant";

  return (
    <div
      className={
        isBot
          ? "mb-3 flex items-center justify-start"
          : "mb-3 flex items-center justify-end"
      }
    >
      {isBot && <MdPrecisionManufacturing className="mr-2" />}
      <div
        className={
          isBot
            ? "max-w-64 rounded border bg-opposite px-3 py-2"
            : "max-w-64 rounded border bg-opposite px-3 py-2 text-tertiary"
        }
      >
        <Markdown
          components={{
            a: ({ href, ...props }) => (
              <Link
                href={href ?? ""}
                className="underline underline-offset-2"
                {...props}
              />
            ),
            p: ({ ...props }) => <p className="mt-3 first:mt-0" {...props} />,
            ul: ({ ...props }) => (
              <ul
                className="mt-3 list-inside list-disc first:mt-0"
                {...props}
              />
            ),
          }}
        >
          {content}
        </Markdown>
      </div>
    </div>
  );
}
