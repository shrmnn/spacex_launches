import React, {useEffect, useState} from "react";
import './mainLaunch.css';
import Launches, {getNextLaunch, getLaunchDate, getTimeDate} from "./launches";

const MainLaunch = () => {
    getNextLaunch();
    const mainLaunch = Launches(getNextLaunch());

    const [time, setTime] = useState([]);

    let date = getTimeDate(mainLaunch['launch']);

    const timerDate = new Date(date).getTime();
    useEffect(() => {
            const x = setInterval(function () {
                const [days, hours, minutes, seconds] = getLaunchDate(timerDate);
                setTime([days, hours, minutes, seconds]);
            }, 1000);
            return () => clearInterval(x);
        }, []
    );


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