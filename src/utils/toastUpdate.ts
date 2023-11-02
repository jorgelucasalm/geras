import { Id, toast, TypeOptions } from "react-toastify";

export default function toastUpdate(message: string, type: TypeOptions, id: Id) {
  toast.update(id, {
    render: message,
    type,
    isLoading: false,
    autoClose: 5000,
    closeButton: true,
    closeOnClick: true,
  });
}
