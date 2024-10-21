import { MdErrorOutline } from "react-icons/md";

export function ErrorMB({ errorMessage }) {
  return (
    <div className="flex items-center gap-1 text-red-500 text-sm font-semibold">
      <MdErrorOutline className="text-lg" />
      <p>{errorMessage}</p>
    </div>
  );
}
