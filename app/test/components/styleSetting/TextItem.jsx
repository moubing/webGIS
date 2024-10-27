// 因为找不到图标，所以暂时使用文字代替，于是就有了这个组件
// 后面自己设计图标，它只是临时的
export function Item({ children }) {
  return (
    <div className="py-0.5 text-gray-600 text-xs font-bold">{children}</div>
  );
}
