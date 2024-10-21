export function SearchFallback({ children }) {
  return (
    <div className="w-full h-56 select-none flex items-center justify-center text-gray-300 font-bold text-3xl">
      {children}
    </div>
  );
}
