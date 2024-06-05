import { IAlbum } from "../types";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: IAlbum) => void;
  initialData: IAlbum;
}
