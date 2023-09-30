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
      onClick={() => { setModal(false) }}
      className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-3xl z-50"
     >
      <div className="max-w-7xl mx-auto">
       <div className="p-5 max-w-[260px] w-full max-h-[500px] bg-white dark:bg-white/20 rounded-xl overflow-hidden shadow-2xl z-30">
        <div className="flex flex-col max-h-[500px] overflow-y-auto scroll_categories">
         {children}
        </div>
       </div>
      </div>
     </motion.div>
    )}
   </AnimatePresence>
  </>
 )
}

export default Modal