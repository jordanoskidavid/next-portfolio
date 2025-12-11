"use client";

import { useEffect } from "react";
import { initLenis } from "./lenisInstance";

export default function SmoothScrollProvider() {
  useEffect(() => {
    const lenis = initLenis({
      autoRaf: true,
      duration: 2,
      smoothWheel: true,
      touchMultiplier: 2,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
