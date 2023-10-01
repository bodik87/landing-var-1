import React from 'react'
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  children: React.ReactNode,
  modal: boolean
  setModal: (value: boolean) => void
}

const Modal = ({ children, modal, setModal }: Props) => {
  return (
    <>
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setModal(false)}
            className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-3xl z-50"
          >
            <div onClick={(e) => e.stopPropagation()} className="max-h-[500px] flex flex-col items-center overflow-y-auto scroll_categories p-5 max-w-xs w-full bg-white dark:bg-white/20 rounded-xl overflow-hidden shadow-2xl z-30">
              <button
                onClick={() => setModal(false)}
                className="ml-auto w-9 h-9 p-2 rounded-full overflow-hidden bg-black/20 dark:bg-white/20 items-center justify-center"
              ><Close />
              </button>

              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Modal

function Close({ active = false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={`${active
        ? "fill-black dark:fill-white"
        : "fill-black dark:fill-white"
        }`}
    >
      <path
        d="M12.12,10l4.07-4.06a1.5,1.5,0,1,0-2.11-2.12L10,7.88,5.94,3.81A1.5,1.5,0,1,0,3.82,5.93L7.88,10,3.81,14.06a1.5,1.5,0,0,0,0,2.12,1.51,1.51,0,0,0,2.13,0L10,12.12l4.06,4.07a1.45,1.45,0,0,0,1.06.44,1.5,1.5,0,0,0,1.06-2.56Z">
      </path>
    </svg>
  );
}