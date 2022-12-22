import React from "react";
import NavigationBar from "./Header/NavigationBar";
import styles from './Main.module.css'

interface IMainProps {
    children: any
}
  

const MainLayout = (props: IMainProps) => {
    return (
        <div
            className={`${styles["page-layout"]}`}
        >
            <NavigationBar />
            <div
                className={`${styles["children"]}`}
            >
                {props.children}
            </div>
        </div>
    );
}

export default MainLayout;