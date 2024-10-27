import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

export function StyleSettingContainer({ children, title }) {
  return (
    <div className="space-y-2 p-2">
      <section className="text-xs font-bold text-gray-700">{title}</section>
      {children}
    </div>
  );
}

export function StyleSettingContainer2({ children, title }) {
  return (
    <div className="space-y-2 p-2">
      <section className="text-xs font-bold text-gray-700">{title}</section>
      <section className="flex items-center gap-2.5">{children}</section>
    </div>
  );
}

export function OpacityInputContainer({ children }) {
  return (
    <div className=" flex items-center gap-2 text-sky-500">
      <section className="flex-grow-0">
        <FiEyeOff />
      </section>
      {children}
      <section className="flex-grow-0">
        <FiEye />
      </section>
    </div>
  );
}
