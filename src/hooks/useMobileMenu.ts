"use client";

import { useState, useEffect, useCallback } from "react";

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return next;
    });
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return { isOpen, toggle, close };
}
