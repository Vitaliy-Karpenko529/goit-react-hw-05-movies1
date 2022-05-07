import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function toastWarn(value) {
  return toast.warn(`there is nothing for  ${value} this query!`, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
