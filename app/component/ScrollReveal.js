"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Smooth scroll to top on page navigation
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Initialize IntersectionObserver for scroll-reveal animations
    let observer;

    const initObserver = () => {
      if (
        typeof window === "undefined" ||
        !("IntersectionObserver" in window)
      ) {
        // Fallback for environments without IntersectionObserver
        document
          .querySelectorAll(
            ".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade, [data-reveal]",
          )
          .forEach((el) => el.classList.add("revealed"));
        return;
      }

      const observerCallback = (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            obs.unobserve(entry.target);
          }
        });
      };

      const observerOptions = {
        root: null,
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.08,
      };

      observer = new IntersectionObserver(observerCallback, observerOptions);

      // Select all elements marked for reveal animations
      const elements = document.querySelectorAll(
        ".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade, [data-reveal]",
      );

      elements.forEach((el) => {
        // If element is already in viewport on load, reveal immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          el.classList.add("revealed");
        } else if (!el.classList.contains("revealed")) {
          observer.observe(el);
        }
      });
    };

    const timer = setTimeout(initObserver, 80);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return null;
}
