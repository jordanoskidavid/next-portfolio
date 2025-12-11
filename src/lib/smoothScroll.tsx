"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 2,
      smoothWheel: true,
      touchMultiplier: 2, // adjust as needed    // enable smooth scrolling on mobile
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
