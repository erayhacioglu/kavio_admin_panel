import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap'

const BasicModal = ({show,setShow}) => {
  return (
    <Modal size="md"
      centered
      show={show}
      onHide={() => setShow(false)}>
        <ModalHeader closeButton>
          Modal Başlık
        </ModalHeader>
        <ModalBody>
            Burası Modal Alanı
        </ModalBody>
        <ModalFooter>
          <div className='modal_footer_button_groups'>
            <button className='btn btn-sm btn-danger'>İptal</button>
            <button className='btn btn-sm btn-primary'>Kaydet</button>
          </div>
        </ModalFooter>
    </Modal>
  )
}

export default BasicModal