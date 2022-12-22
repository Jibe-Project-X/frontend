import React from "react";
import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
  

const Button = (props: ButtonProps) => {
    return (
        <button
            className={`${styles.button} ${props.className}`}
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default Button;