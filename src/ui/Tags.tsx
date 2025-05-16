interface TagProps {
  tags: string[];
}

export default function Tags({ tags }: TagProps) {
  return (
    <div className="flex flex-wrap gap-1">
      {tags.map((tag, id) => (
        <p
          key={id}
          className="w-fit rounded-lg bg-secondary p-1 text-xs font-extrabold text-opposite"
        >
          {tag}
        </p>
      ))}
    </div>
  );
}
