import { WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";

export default function ButtonWhatsapp({ onClick }) {
  return (
    <button
      aria-label="Cotato via Whatsapp"
      type="button"
      onClick={onClick}
      className="btn-whatsapp">
      <WhatsappLogo size={32} />
    </button>
  );
}
