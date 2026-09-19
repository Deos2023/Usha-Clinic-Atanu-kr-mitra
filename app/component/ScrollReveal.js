"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    let observer;

    const setupObserver = () => {
      if (!("IntersectionObserver" in window)) {
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

      observer = new IntersectionObserver(observerCallback, {
        root: null,
        rootMargin: "0px 0px -30px 0px",
        threshold: 0.05,
      });

      const elements = document.querySelectorAll(
        ".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade, [data-reveal]",
      );

      elements.forEach((el) => {
        if (!el.classList.contains("revealed")) {
          observer.observe(el);
        }
      });
    };

    // Use requestIdleCallback or setTimeout to defer execution past critical hydration
    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(setupObserver, {
        timeout: 250,
      });
      return () => {
        window.cancelIdleCallback(idleId);
        if (observer) observer.disconnect();
      };
    } else {
      const timer = setTimeout(setupObserver, 80);
      return () => {
        clearTimeout(timer);
        if (observer) observer.disconnect();
      };
    }
  }, [pathname]);

  return null;
}
