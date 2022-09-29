import React from 'react';
import './input.css'

const Input = (props) => {
    return (
        <div>
            <input onChange={(event) => props.setValue(event.target.value )}
                   value={props.value}
                   className='input'
                   type={props.type}
                   placeholder={props.placeholder}/>
        </div>
    );
};

export default Input;