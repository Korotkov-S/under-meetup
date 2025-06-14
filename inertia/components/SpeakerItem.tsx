import React, { useState } from 'react'

import CodeIcon from '../assets/icons/CodeIcon'
import Modal from './Modal'
import ChevronRightIcon from '../assets/icons/ChevronRightIcon'

interface SpeakerItemProps {
  image: string
  name: string
  position: string
  time: string
  title: string
  text: string[]
}

const SpeakerItem = ({ image, name, position, time, title, text }: SpeakerItemProps) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="flex gap-4 items-start">
      <CodeIcon />
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-center cursor-pointer" onClick={() => setShowModal(true)}>
          <div className="flex flex-1 flex-col gap-4">
            <p className="text-lg text-primary font-medium leading-none">{time}</p>
            <p className="text-text-link font-medium leading-none">{title}</p>
          </div>
          <ChevronRightIcon />
        </div>
        <div className="mt-3 flex items-center gap-4">
          <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover" />
          <div>
            <p className="text-md font-medium text-text-title">{name}</p>
            <p className="text-sm text-text-subtitle">{position}</p>
          </div>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl text-text-h1 font-roboto-flex font-extra-black">{title}</h2>

          <div className="mt-3 flex items-center gap-4">
            <img src={image} alt="Ланцев Павел" className="w-32 h-32 rounded-full object-cover" />
            <div>
              <p className="text-md font-medium text-text-title">{name}</p>
              <p className="text-sm text-text-subtitle">{position}</p>
            </div>
          </div>

          {text.map((item) => (
            <p className="text-sm text-h1 leading-[157%]">{item}</p>
          ))}
        </div>
      </Modal>
    </div>
  )
}

export default SpeakerItem
