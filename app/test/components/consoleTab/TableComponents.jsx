export function TableRow({ children }) {
  if (children.length === 0) return null;

  return (
    <div className=" odd:bg-gray-50 even:bg-slate-200 hover:bg-yellow-200 flex py-1 ">
      {children}
    </div>
  );
}
export function TableHeaderRow({ children }) {
  if (children.length === 0) return null;
  return (
    <div className=" sticky top-8 bg-white flex py-1  border-b-2 border-cyan-500 ">
      {children}
    </div>
  );
}

export function TableCell({ children, width, color = "#333333" }) {
  return (
    <div style={{ width, color }} className="text-sm truncate pl-2">
      {children}
    </div>
  );
}
export function TableHeaderCell({ children, width, color = "#333333" }) {
  return (
    <div
      style={{ width, color }}
      className="font-bold pl-2 hover:z-50 relative select-none truncate"
    >
      {children}
    </div>
  );
}
