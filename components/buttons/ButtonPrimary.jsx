import Link from "next/link";

export default function ButtonPrimary({ type, link, title, icon, onClick }) {
  return (
    <>
      {type && (
        <button
          tabIndex="0"
          className="button-primary"
          type={type}
          onClick={onClick}
          title={title}
        >
          <span className="me-3 me-lg-5">{title}</span>
          {icon}
        </button>
      )}
      {link && (
        <Link
          tabIndex="0"
          className="button-primary"
          href={link}
          onClick={onClick}
          title={title}
        >
          <span className="me-3 me-lg-5">{title}</span>
          {icon}
        </Link>
      )}
    </>
  );
}
