import React from 'react';
import "./TextInput.scss"
const TextInput = ({reference, error=true, label="Ismingizni kiriting...", ...props}) => {
    return (
        <label className='textInput'>
            <input ref={reference} className='textInput__field' type="text" />
            <span className='textInput__label'>{label}</span>
            <span className={ `textInput__message  ${error ? 'textInput__message--open':"" } ` }>xato xabari</span>
        </label>
    );
}

export default TextInput;
