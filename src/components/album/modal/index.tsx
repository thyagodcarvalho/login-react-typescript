import { useEffect, useState } from "react";

import { IAlbum } from "../types";
import { ModalProps } from "./type";

import "./style.css";

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialData,
}) => {
  const [formData, setFormData] = useState<IAlbum>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  useEffect(() => {
    setFormData(initialData);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2 className="modal-title">Edit Info</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Artist</label>
            <input
              type="text"
              name="artist"
              value={formData.artist}
              onChange={handleChange}
              className="modal-input"
            />
          </div>
          <div>
            <label>Album Name</label>
            <input
              type="text"
              name="albumName"
              value={formData.albumName}
              onChange={handleChange}
              className="modal-input"
            />
          </div>
          <div>
            <label>Year</label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="modal-input"
            />
          </div>
          <div className="modal-button-group">
            <button type="button" onClick={onClose} className="modal-button">
              Cancel
            </button>
            <button type="submit" className="modal-button">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
