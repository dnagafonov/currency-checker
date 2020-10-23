import { toast } from 'react-toastify';

 export const errorToast = message => toast.error(message, { 
   position: toast.POSITION.TOP_CENTER,
   autoClose: 5000
 });

 export const infoToast = message => toast.info(message, { 
  position: toast.POSITION.TOP_CENTER,
  autoClose: 3000
});