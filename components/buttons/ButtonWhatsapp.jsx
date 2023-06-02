import { WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";

export default function ButtonWhatsapp() {
  return (
    <Link href="" className="btn-whatsapp">
      <WhatsappLogo size={32} />
    </Link>
  );
}
