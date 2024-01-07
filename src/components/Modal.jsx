import { useState } from 'react'

import ModalContainer from './ModalContainer'
import OpenModal from './OpenModal'

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleModal = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <>
      <OpenModal
        onOpenModal={handleToggleModal}
      />

      <ModalContainer
        isOpen={isOpen}
        onCloseModal={handleToggleModal}
      />
    </>
  )
}
