import React, { useEffect, useState } from "react";
import styles from './TimerPage.module.css';

const TimerPage = () => {
    const [countTimer, setCountTime] = useState(10);
    const [timeActive, setTimeActive] = useState(false);

    const handleTimerBtn = () => {
        if(countTimer === 0) {
            setCountTime(10);
        }
        setTimeActive((prevVal) => !prevVal);
    }

    useEffect(() =>{
        let timerInterVal = '';
        console.log(timeActive, countTimer);
        if(timeActive && countTimer > 0){
            timerInterVal = setInterval(() =>{
                console.log(timeActive, countTimer);
                setCountTime((countTimer) => countTimer - 1);
            }, 1000);

        } else if(countTimer === 0){
            setTimeActive(false);
        }

        return () => clearInterval(timerInterVal);
    }, [timeActive, countTimer]);
    return (
        <React.Fragment>
            <div className={styles.timerContiner}>
                <h1 className={styles.timerValue}>{countTimer}</h1>
                <label className={styles.timerLabel} onClick={handleTimerBtn}>{timeActive ? 'STOP' : 'START'}</label>
            </div>

        </React.Fragment>
    )
}

export default TimerPage;