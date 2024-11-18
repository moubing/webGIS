import clsx from "clsx";

export function Tags({ layer }) {
  return (
    <div className={clsx("flex gap-2", {})}>
      {layer.get("tags").map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  );
}

function Tag({ tag }) {
  return <div className="px-1 py-0.5 rounded-sm text-xs  ">{tag}</div>;
}
