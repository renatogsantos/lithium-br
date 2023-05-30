import Link from "next/link";

export default function ButtonPlay({ type, link, title, icon, onClick }) {
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
          {icon}
        </Link>
      )}
    </>
  );
}
