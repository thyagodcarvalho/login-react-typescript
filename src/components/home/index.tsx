import { useEffect, useState } from "react";

import {
  deleteAlbum,
  getAllAlbum,
  saveAlbum,
  updateAlbum,
} from "../../service/album";
import { IArtist, getAllArtist } from "../../service/artist";
import LocalStorageAuthentication from "../../utils/local-storage/authentication";
import { Album } from "../album";
import { Modal } from "../album/modal";
import { IAlbum } from "../album/types";
import { Artist } from "../artist";
import "./style.css";

export const Home = () => {
  const userCurrent = LocalStorageAuthentication.getUserInfo();

  const initialAlbum: IAlbum = {
    artist: "",
    albumName: "",
    year: "",
  };

  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [artists, setArtists] = useState<IArtist[]>([]);
  const [loadingArtist, setLoadingArtist] = useState(true);
  const [loadingAlbum, setLoadingAlbum] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalOpenUpdate, setIsModalOpenUpdate] = useState<boolean>(false);
  const [albumEdit, setAlbumEdit] = useState<IAlbum>(initialAlbum);

  function handleEdit(album: IAlbum) {
    setAlbumEdit(album);
    setIsModalOpenUpdate(true);
  }

  async function listArtists() {
    const { data } = await getAllArtist(userCurrent?.token ?? "");

    setArtists(data);
    setLoadingArtist(false);
  }

  async function listAlbum() {
    const { data, error } = await getAllAlbum(userCurrent?.token ?? "");

    setLoadingAlbum(false);

    if (error) return setAlbums([]);
    setAlbums(data);
  }

  async function deletAlbum(albumName: string) {
    await deleteAlbum(userCurrent?.token ?? "", albumName);

    listAlbum();
  }

  async function handleSave(album: IAlbum) {
    await saveAlbum(userCurrent?.token ?? "", album);

    listAlbum();
  }

  async function handleUpdate(album: IAlbum) {
    await updateAlbum(userCurrent?.token ?? "", album);

    listAlbum();
  }

  useEffect(() => {
    listArtists();
    listAlbum();
  }, []);

  return (
    <div className="container row">
      <div className="item">
        {loadingAlbum ? (
          <div className="loading">Carregando...</div>
        ) : (
          <>
            <button
              className="card-button card-button-save"
              onClick={() => setIsModalOpen(true)}
            >
              Create new Album
            </button>
            <Album albums={albums} onDelete={deletAlbum} onEdit={handleEdit} />
          </>
        )}
      </div>
      <div className="item">
        {loadingArtist ? (
          <div className="loading">Carregando...</div>
        ) : (
          <Artist artists={artists} />
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        initialData={initialAlbum}
      />

      <Modal
        isOpen={isModalOpenUpdate}
        onClose={() => setIsModalOpenUpdate(false)}
        onSave={handleUpdate}
        initialData={albumEdit}
      />
    </div>
  );
};
