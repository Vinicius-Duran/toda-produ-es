import { useEffect } from "react";

export function useMetalShine() {
  useEffect(() => {
    const onMove = (event) => {
      const target = event.target;
      if (!target || typeof target.closest !== "function") return;

      const text = target.closest(".gold-text");
      if (text) {
        const rect = text.getBoundingClientRect();
        const ratio = (event.clientX - rect.left) / rect.width;
        text.style.setProperty("--gx", `${ratio * 170 - 35}%`);
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
}
