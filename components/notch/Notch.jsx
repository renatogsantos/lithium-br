import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import Link from "next/link";

export default function Notch() {
  return (
    <div className="notch ">
      <Link href="#">
        <FacebookLogo size={24} color="#fff" />
      </Link>
      <Link href="#">
        <InstagramLogo size={24} color="#fff" />
      </Link>
      <Link href="#">
        <WhatsappLogo size={24} color="#fff" />
      </Link>
    </div>
  );
}
