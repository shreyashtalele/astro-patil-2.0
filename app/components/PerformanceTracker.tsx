"use client";

import { useEffect } from "react";
import { trackWebVitals } from "@/app/lib/performance";

export function PerformanceTracker() {
  useEffect(() => {
    trackWebVitals();
    if (typeof window !== "undefined" && window.performance) {
      performance.mark("page-loaded");
    }
  }, []);

  return null;
}
