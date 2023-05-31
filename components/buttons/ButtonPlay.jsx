import Link from "next/link";

export default function ButtonPlay({ type, link, title, icon, onClick, target }) {
  return (
    <>
      {type && (
        <button
          tabIndex="0"
          className="button-primary"
          type={type}
          onClick={onClick}
          title={title}
          target={target}
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
          target={target}
        >
          {icon}
        </Link>
      )}
    </>
  );
}
