export function Tags({ layer }) {
  return (
    <div className="flex gap-2 ">
      {layer.get("tags").map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  );
}

function Tag({ tag }) {
  return (
    <div className="px-1 py-0.5 rounded-sm outline-1 outline-green-500 outline text-xs text-green-600">
      {tag}
    </div>
  );
}
