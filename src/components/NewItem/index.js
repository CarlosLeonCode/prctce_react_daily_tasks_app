import React, { useContext } from "react";
import { AppContext } from "../../context";
import { AiFillCopyrightCircle, AiFillLinkedin } from 'react-icons/ai'
import { BiLogoReact, BiSolidFileCss, BiWorld } from 'react-icons/bi'
import { Modal } from "../Modal";
import "./newItem.css";

function NewItem() {
  const { addTodo, openModal, onOpenCloseModal } = useContext(AppContext);
  const currentDate = new Date().getFullYear()

  return (
    <div className="new-task">
      <h2 className="subtitle">Create a new task</h2>
      <form onSubmit={addTodo}>
        <div className="form-group">
          <label className="label">Task Name</label>
          <input type="text" placeholder="write a task here..." />
        </div>
          <button className="submit-btn">Create Task</button>
      </form>
      <button className="copyrght-btn" onClick={onOpenCloseModal}>
        <AiFillCopyrightCircle />
      </button>
      {openModal && (
        <Modal>
          <div>
            <h1 className="modal-title"> Daily Task tracker </h1>
            <p className="modal-captions">
              Web app that allow to you record daily tasks, these are saved in your 
              <strong> browser local storage</strong>.
            </p>
            <div className="divisor-container">
              <hr />
            </div>
            <div className="credits-section">
              <h4 className="text-center">Created using</h4>
              <div className="tools-wp">
                <BiLogoReact size={'8rem'}/>
                <BiSolidFileCss size={'8rem'}/>
              </div>
              <div className="badges-wp">
                <div className="badge">LocalStorage</div>
                <div className="badge">JSX</div>
                <div className="badge">React Icons</div>
                <div className="badge">Neumorphism.io</div>
              </div>
            </div>
            <div className="develop-by">
              <h4 className="text-center">Develop By</h4>
              <div className="text-center">
                <span>CarlosLeonCode</span>
                <br />
                <span>© {currentDate}</span>
              </div>
              <div className="about">
                <div>
                  <a href="https://linktr.ee/carlosleoncode" target="_blank" rel="noopener noreferrer">
                    More about me
                  </a>
                </div>
                <div className="circle-links">
                  <a className="circle-link" href="https://www.linkedin.com/in/carlosleoncode/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin size={'2rem'}/>
                  </a>
                  <a className="circle-link" href="https://www.linkedin.com/in/carlosleoncode/" target="_blank" rel="noopener noreferrer">
                    <BiWorld size={'2rem'}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export { NewItem };
