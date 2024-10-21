import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"], weight: "500" });

export function Logo() {
  return (
    <div
      className={`absolute top-0.5 left-5 text-5xl font-bold text-gray-100 my-title ${rubik.className}`}
    >
      Demo
    </div>
  );
}
