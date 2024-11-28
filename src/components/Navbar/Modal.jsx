import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 w-full h-full bg-slate-900 flex justify-center items-center z-50 ">
      <div className=" relative bg-slate-950 text-pink-600 p-8 rounded-lg shadow-lg max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-pink-600 hover:text-pink-800 transition duration-300"
        >
          <FaTimes size={25} className='mr-4' />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
