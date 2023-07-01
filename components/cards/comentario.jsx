import { Star } from "@phosphor-icons/react";
import { Parallax } from "react-scroll-parallax";

export default function Comentario({ id, nome, comentario, foto }) {
  return (
    <Parallax
      translateX={["-2000px", "10px"]}
      rootMargin={{
        top: 30000,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <div className="card-comentario p-4 mb-4 flex-column flex-lg-row">
        <div
          className="foto"
          style={{
            backgroundImage: `url(${foto})`,
          }}
        />
        <div className="d-flex flex-column gap-1">
          <span className="f-24">{nome}</span>
          <span className="f-16">{comentario}</span>
          <span>
            <Star size={24} color="#f5b400" weight="fill" />
            <Star size={24} color="#f5b400" weight="fill" />
            <Star size={24} color="#f5b400" weight="fill" />
            <Star size={24} color="#f5b400" weight="fill" />
            <Star size={24} color="#f5b400" weight="fill" />
          </span>
        </div>
      </div>
    </Parallax>
  );
}
