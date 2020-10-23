import { toast } from 'react-toastify';

 export const errorToast = message => toast.error(message, { 
   position: toast.POSITION.TOP_CENTER,
   autoClose: 5000
 });