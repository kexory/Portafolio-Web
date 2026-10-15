import { useEffect } from "react";
import { X } from "lucide-react";

export function Modal({ children, onClose, label }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="modal-window" role="dialog" aria-modal="true" aria-label={label}>
        <button className="modal-close icon-button" onClick={onClose} aria-label="Cerrar ventana"><X size={19} /></button>
        {children}
      </div>
    </div>
  );
}
