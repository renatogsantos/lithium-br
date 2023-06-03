import { abrirChamadoWhatsapp } from "@/helpers";
import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import Link from "next/link";

export default function Notch() {
  return (
    <div className="notch ">
      <Link href="https://www.instagram.com/lithiumbrasil/" target="_blank">
        <FacebookLogo size={24} color="#fff" />
      </Link>
      <Link href="https://www.instagram.com/lithiumbrasil/" target="_blank">
        <InstagramLogo size={24} color="#fff" />
      </Link>
      <Link
        href="#"
        onClick={() => {
          abrirChamadoWhatsapp(
            "Olá, gostaria de fazer um orçamento de um produto Apple!"
          );
        }}
      >
        <WhatsappLogo size={24} color="#fff" />
      </Link>
    </div>
  );
}
