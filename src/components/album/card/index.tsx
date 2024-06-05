import { IAlbum } from "../types";
import "./style.css";

export const CardAlbum: React.FC<{
  data: IAlbum;
  onDelete: (id: string) => void;
  onEdit: (album: IAlbum) => void;
}> = ({ data, onDelete, onEdit }) => {
  return (
    <div className="container-card">
      <div className="flex">
        <p className="card-title-artist">{data?.artist}</p>
        <p className="card-title-name">{data?.albumName}</p>
        <p className="card-title-year">{data?.year}</p>
      </div>
      <div className="flex">
        <button
          className="card-button card-button-edit"
          onClick={() => onEdit(data)}
        >
          Edit
        </button>
        <button
          className="card-button card-button-delete"
          onClick={() => onDelete(data.albumName)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
