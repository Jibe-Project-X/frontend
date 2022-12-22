import React from "react";
import styles from './Logo.module.css'

interface LogoProps {
    className: string,
    logo: string
}
  

const Logo = (props: LogoProps) => {
    return (
        <div
            className={`${styles.logo} ${props.className}`}
        >
            <img
                className={`${styles.image}`}
                src={`${props.logo}`}
            />
        </div>
    );
}

export default Logo;