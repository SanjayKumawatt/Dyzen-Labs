import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from 'lenis/react'; // Lenis ka hook import kiya

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis(); // Lenis ka instance liya

  useEffect(() => {
    // Ek chhota sa delay dete hain taaki naya page pura render ho jaye
    const timeoutId = setTimeout(() => {
      if (lenis) {
        // Agar lenis active hai toh usko top pe bhejo
        lenis.scrollTo(0, { immediate: true });
      } else {
        // Fallback agar lenis load nahi hua
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    }, 10); // 10 milliseconds ka micro-delay

    return () => clearTimeout(timeoutId);
  }, [pathname, lenis]);

  return null;
}