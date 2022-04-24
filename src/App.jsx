import "./App.scss"
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal"
import {useRef, useState} from 'react';
function App() {
  const modalRef=useRef();
  const toggleModal=()=>{
    modalRef.current.classList.toggle('modal__open')
    modalRef.current.addEventListener("click", cloceModal)
  }
  const cloceModal=(event)=>{
    modalRef.current.classList.remove("modal__open");
      if(event.target===modalRef.current){
        modalRef.current.classList.remove('modal__open');
        modalRef.current.removeEventListener("click", cloceModal)
      }
  }
  return (
    <div className="App">
      <Header />
      <Modal reference={modalRef} />
      <button onClick={toggleModal}>Toggle Modal </button>
  </div>
  )
 }

export default App