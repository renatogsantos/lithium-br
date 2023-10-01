import { WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";

export default function ButtonWhatsapp({ onClick }) {
  return (
    <button
      type="button"
      aria-label="Contato via Whatsapp"
      onClick={onClick}
      className="btn-whatsapp"
    >
      <WhatsappLogo size={32} />
    </button>
  );
}
