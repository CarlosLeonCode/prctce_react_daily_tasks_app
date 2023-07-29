import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { AppContext } from "../../context";
import { AiFillCloseCircle } from 'react-icons/ai'
import './modal.css'

function Modal({children}){

  const { onOpenCloseModal } = useContext(AppContext)

  return ReactDOM.createPortal(
    <div className="modal-component">
      <div className="card">
        <button className="close-btn" onClick={onOpenCloseModal}>
          <AiFillCloseCircle />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modalWrapper")
  )
}

export { Modal }
