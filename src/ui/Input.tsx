interface InputProps {
  value: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
export default function Input({ value, onChange, onKeyDown }: InputProps) {
  return (
    <input
      autoFocus
      className="w-full place-items-baseline rounded-md border border-skillBr bg-inherit p-1 text-tertiary"
      placeholder="Ask me something :3!"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}
