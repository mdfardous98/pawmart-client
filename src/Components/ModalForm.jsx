import React from "react";

/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const ModalForm = ({ buttonText = "Open Modal", ButtonIcon }) => {
  const openModal = () => document.getElementById("modal_form").showModal();

  return (
    <div className="w-full flex justify-center">
      <motion.button
        onClick={openModal}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transition-all duration-300 cursor-pointer text-lg"
      >
        {ButtonIcon && <ButtonIcon className="w-5 h-5" />}
        {buttonText}
      </motion.button>

      {/* Modal */}
      <dialog
        id="modal_form"
        className="modal modal-bottom sm:modal-middle bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 w-11/12 max-w-lg"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center gap-4"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome to PawMart!
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            This is a smooth animated modal. You can close it by pressing ESC or
            clicking the button below.
          </p>
          <img
            src="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=400&h=200&fit=crop"
            alt="Cute pet"
            className="w-full h-48 object-cover rounded-xl shadow-md"
          />

          <div className="modal-action w-full mt-4 flex justify-center">
            <form method="dialog" className="w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-md transition-all duration-300 cursor-pointer text-lg"
              >
                Close
              </motion.button>
            </form>
          </div>
        </motion.div>
      </dialog>
    </div>
  );
};

export default ModalForm;
