export interface Project {
  id: string;
  name: string;
  sector: string;
  status: string;
  description: string;
  launchDate: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}