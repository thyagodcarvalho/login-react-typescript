import { Card } from "./card";
import { CardProps } from "./card/types";

import "./style.css";

const imgUrl =
  "https://i.pinimg.com/736x/48/1f/14/481f1421899729d3dc7e17ae3345636a.jpg";

export const Artist = ({ artists }: any) => {
  return (
    <div className="container-artist">
      <h1>Artist</h1>
      <div className="card-grid">
        {artists?.map((artistData: CardProps, key: any) => (
          <Card
            key={key}
            name={artistData.name}
            twitter={artistData.twitter}
            image={imgUrl}
          />
        ))}
      </div>
    </div>
  );
};
