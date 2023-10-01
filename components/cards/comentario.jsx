import { Star } from "@phosphor-icons/react";
import { Parallax } from "react-scroll-parallax";

export default function Comentario({ id, nome, comentario, foto }) {
  return (
    <Parallax
      translateX={["-1000px", "10px"]}
      scale={[0, 1]}
      rotate={["-45deg", "0"]}
      rootMargin={{
        top: 1000,
        right: 0,
        bottom: -600,
        left: 0,
      }}
      easing="easeInOut"
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
