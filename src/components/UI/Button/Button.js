import React from 'react';
import classes from './Button.module.css'

const button = (props) => (
    <button href="#opis" onClick={props.onClick} className={`${classes.button} ${classes[props.type]}`}>
        {props.children}
    </button>
)

export default button