import { CardAlbum } from "./card";

import "./style.css";
import { IAlbum } from "./types";

export const Album: React.FC<{
  albums: IAlbum[];
  onDelete: any;
  onEdit: any;
}> = ({ albums, onDelete, onEdit }) => {
  return (
    <div className="container-album-card">
      <h1>Albums</h1>
      <div className="list-container-album-card">
        {albums.map((card, idx) => (
          <CardAlbum
            key={idx}
            data={card}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
};
