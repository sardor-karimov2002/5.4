import "./Header.scss"; 
import {useRef, useState} from 'react';
import Textinput from "../TextInput/TextInput";
function Header() {
    const [message,setMessage]=useState('')
    const inputRef=useRef()
    const  handlecheng=()=>{
        console.log("change",inputRef.current.value);
        setMessage(inputRef.current.value)
        inputRef.current.value=null
    }
    return <div className="header">
        <h3>Input value: {message}</h3> 
        <div className="tex-box">
         <Textinput reference={inputRef} />
        </div>
        <button onClick={handlecheng}>Submit</button>
     </div>
}
export default Header;