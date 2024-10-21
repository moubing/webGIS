import clsx from "clsx";
import { ErrorMB } from "./ErrorMB";

// 将来把number input和text input分开
// 因为number还有其他的东西需要设置，比如最大值最小值，颗粒度啥的

export function InputMB({
  optionKey,
  value,
  handleChange,
  errorMessage = null,
  isRequired = false,
  type = "text",
}) {
  let property;
  if (isRequired) {
    property = "*" + optionKey + ":";
  } else {
    property = optionKey + ":";
  }
  return (
    <div className="p-2 flex flex-col gap-2 bg-slate-200 rounded-md">
      <div className="flex gap-2 items-center">
        <h1
          className={clsx("text-sm font-bold", {
            "text-red-500": isRequired,
            "text-gray-500": !isRequired,
          })}
        >
          {property}
        </h1>
        <input
          className="text-sm px-1 py-0.5 text-gray-700 rounded-sm outline-none border-2 border-sky-400"
          name={optionKey}
          type={type}
          value={value === undefined ? "" : value}
          onChange={(e) => {
            handleChange(e.target.name, e.target.value);
          }}
        />
      </div>
      {errorMessage && <ErrorMB errorMessage={errorMessage} />}
    </div>
  );
}
