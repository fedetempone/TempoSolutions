import { ArrowUp } from "@phosphor-icons/react";
import "../styles/scrollToTop.css"

interface ScrollToTopProps {
  onClick?: () => void;
}

export const ScrollToTop = ({ onClick }: ScrollToTopProps) => {
  const handleDefaultClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={onClick || handleDefaultClick}
      className="scroll-btn show" /* Forzamos la clase 'show' siempre activa */
      aria-label="Volver arriba"
    >
      <ArrowUp size={24} weight="bold" />
    </button>
  );
};