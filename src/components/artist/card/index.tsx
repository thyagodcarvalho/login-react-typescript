import "./style.css";

import { CardProps } from "./types";

export function Card({ id, name, image, twitter }: CardProps) {
  return (
    <div className="card">
      <img src={image} alt="card" />
      <h2>{twitter}</h2>
      <p>
        <b>Name:</b>
        {name}
      </p>
    </div>
  );
}
