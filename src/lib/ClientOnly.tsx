"use client";
import { useState, useEffect } from "react";

export default function ClientOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    document.body.classList.add("hydrated");
  }, []);

  if (!hydrated) return null;
  return <>{children}</>;
}
