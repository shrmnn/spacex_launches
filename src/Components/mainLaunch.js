import React, {useState} from "react";
import './mainLaunch.css';
import Launches, {getNextLaunch} from "./launches";

const MainLaunch = () => {
    getNextLaunch();
    const mainLaunch = Launches(getNextLaunch());

    const [time, setTime] = useState([]);


    let date = mainLaunch['launch']['years'] + ' '
        + mainLaunch['launch']['months'] + ' '
        + mainLaunch['launch']['date'] + ' '
        + mainLaunch['launch']['hours'] + ':'
        + mainLaunch['launch']['minutes'];

    const timerDate = new Date(date).getTime();
    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = timerDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTime([days, hours, minutes, seconds]);


    }, 1000);

    return (
        <div className='bMainLaunch'>
            <div className='bDate'>
                <div className='bPeriod'>
                    <p>{time[0]}</p>
                    <p className='mPeriod'>дней</p>
                </div>
                <div className='bPeriod'>
                    <p>{time[1]}</p>
                    <p className='mPeriod'>часов</p>
                </div>
                <div className='bPeriod'>
                    <p>{time[2]}</p>
                    <p className='mPeriod'>минут</p>
                </div>
                <div className='bPeriod'>
                    <p>{time[3]}</p>
                    <p className='mPeriod'>секунд</p>
                </div>

            </div>
            <div className='bMainTitle'>
                <div className='bLeftPanel'>
                    <p id='idTitle'>{mainLaunch['mission']}</p>
                </div>
                <div className='bRightPanel'>
                    <p id='idVehicle'>{mainLaunch['vehicle']}</p>
                    <p id='idLocation'>{mainLaunch['location']}</p>
                </div>

            </div>

        </div>
    );
};

export default MainLaunch;