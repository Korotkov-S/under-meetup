import React from 'react'
import CloseIcon from '../assets/icons/CloseIcon'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="relative overflow-auto rounded-[24px] max-w-[640px] max-h-[80dvh] bg-white pt-14 px-8 pb-9 sm:pb-8">
        <button onClick={onClose} className="absolute top-4 right-4">
          <CloseIcon />
        </button>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Modal
