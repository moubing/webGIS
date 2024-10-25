"use client";

import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

export function StyledMenu({ title, children }) {
  return (
    <Menu>
      {({ open }) => (
        <>
          <MenuButton className="data-[hover]:bg-gray-200 data-[open]:bg-gray-200 data-[open]:text-pink-500 rounded-md px-2 py-1 focus:outline-none">
            {title}
          </MenuButton>
          <AnimatePresence>
            {open && (
              <MenuItems
                static
                as={motion.div}
                anchor="bottom start"
                style={{ originX: 0, originY: 0 }}
                initial={{ opacity: 0.3, scale: 0.95, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0 }}
                className=" rounded-lg shadow-lg bg-gray-50/40 backdrop-blur text-gray-600 select-none text-sm space-y-2 w-72 p-2 relative z-50 focus:outline-none "
              >
                {children}
              </MenuItems>
            )}
          </AnimatePresence>
        </>
      )}
    </Menu>
  );
}
