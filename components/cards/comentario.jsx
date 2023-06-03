import { Star } from "@phosphor-icons/react";

export default function Comentario({ nome, comentario, stars, foto }) {
  const estrelas = Array(stars).fill(
    <Star size={24} color="#f5b400" weight="fill" />
  );
  return (
    <div className="card-comentario p-4 mb-4">
      <div
        className="foto"
        style={{
          backgroundImage: `url(${foto})`,
        }}
      />
      <div className="d-flex flex-column gap-1">
        <span className="f-24">{nome}</span>
        <span className="f-16">{comentario}</span>
        <span>{estrelas}</span>
      </div>
    </div>
  );
}