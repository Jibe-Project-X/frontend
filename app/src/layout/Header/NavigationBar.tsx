import React from "react";
import Logo from '../../common/Logo/Logo';
import logoImg from './icons/logo2.jpeg';
import styles from './NavigationBar.module.css'

interface INavBarprops {
}

const NavigationBar = (props: INavBarprops) => {
    return (
        <div
            className={`${styles["navigation-bar"]}`}
        >
            <Logo 
                className={`${styles["logo"]}`}
                logo={logoImg}
            />
        </div>
    );
}

export default NavigationBar;
