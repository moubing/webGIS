export function OptionContainer({ title, children }) {
  return (
    <div className="space-y-2">
      <div className="p-2 bg-green-200 text-sm font-bold text-gray-700 rounded-md shadow-md">
        {title}
      </div>
      <div className="overflow-auto h-[280px] space-y-2">{children}</div>
    </div>
  );
}
