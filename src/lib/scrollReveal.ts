"use client";

/**
 * Visible-by-default scroll reveal:
 * 1. JS marks every [data-reveal] as data-revealed="false" on mount.
 * 2. IntersectionObserver flips to "true" when the element is in view.
 * 3. A safety setTimeout (3500ms) forces every element to "true" — protects
 *    against headless browsers, background tabs, or silent IO failures.
 */
export function initScrollReveal() {
  if (typeof window === "undefined") return;

  const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
  if (targets.length === 0) return;

  targets.forEach((el) => {
    if (!el.hasAttribute("data-revealed")) el.setAttribute("data-revealed", "false");
  });

  const reveal = (el: HTMLElement) => el.setAttribute("data-revealed", "true");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal(entry.target as HTMLElement);
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
  );

  targets.forEach((el) => io.observe(el));

  const safety = window.setTimeout(() => {
    targets.forEach(reveal);
    io.disconnect();
  }, 3500);

  return () => {
    window.clearTimeout(safety);
    io.disconnect();
  };
}
