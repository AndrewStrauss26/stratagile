import React from "react";
import styles from './Circles.module.css';

const Circle = () => {
    return (
        <React.Fragment>
            <div className={styles.mainCirlce}>
            <div className={styles.outterCircle}></div>
            <div className={styles.innerCircle}></div>
            </div>

        </React.Fragment>
    )
}

export default Circle;