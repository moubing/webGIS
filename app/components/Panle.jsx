"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import clsx from "clsx";

export function Panle({
  isOpen,
  handleClose,
  children,
  isblur = true,
  height = "h-max",
  width = "w-max",
}) {
  const myClassName = `p-4 rounded-lg overflow-auto shadow-lg mt-16 bg-white ${height} ${width}`;
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogBackdrop
        className={clsx("fixed z-50 inset-0 bg-black/10", {
          "backdrop-blur": isblur,
        })}
      />
      <div className="fixed z-50 inset-0 w-screen flex justify-center">
        <DialogPanel className={myClassName}>{children}</DialogPanel>
      </div>
    </Dialog>
  );
}
