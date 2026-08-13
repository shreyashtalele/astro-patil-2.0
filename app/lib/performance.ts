// app/lib/performance.ts
// This is a utility file that can be imported by both server and client

// Track Core Web Vitals
export async function trackWebVitals() {
  if (typeof window !== "undefined") {
    try {
      // Dynamic import for web-vitals v4+
      const { onCLS, onINP, onLCP, onTTFB } = await import("web-vitals");

      // Note: FID and FCP are deprecated in v4+
      onCLS(console.log);
      onINP(console.log); // Replaces FID
      onLCP(console.log);
      onTTFB(console.log);
    } catch (error) {
      // Silently fail if web-vitals is not available
      console.debug("Web Vitals not available:", error);
    }
  }
}

// Performance marks - only run in browser
export function markPerformance(name: string) {
  if (typeof window !== "undefined" && window.performance) {
    performance.mark(name);
  }
}

export function measurePerformance(name: string, startMark: string) {
  if (typeof window !== "undefined" && window.performance) {
    performance.measure(name, startMark);
  }
}

// Image preloading - only run in browser
export function preloadImages(imageUrls: string[]) {
  if (typeof window !== "undefined") {
    imageUrls.forEach((url) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = url;
      document.head.appendChild(link);
    });
  }
}
