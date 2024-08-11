import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Reminder({ lastCompleted }) {
  useEffect(() => {
    const now = new Date();
    if (!lastCompleted || now.getDate() !== new Date(lastCompleted).getDate()) {
      toast.info('Dont forget to recite Ziyarat Ashura today to keep your streak!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [lastCompleted]);

  return <ToastContainer />;
}

export default Reminder;
