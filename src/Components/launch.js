import React, {useEffect, useState} from "react";
import {getLaunchDate, getTimeDate} from "./launches";


let Launch = (props) => {
    const [time, setTime] = useState('');
    const [addClass, setClass] = useState('');

    let launch = props['launch'];

    let date = getTimeDate(launch['launch']);

    const timerDate = new Date(date).getTime();

    useEffect(() => {
            const x = setInterval(function () {
                const [days, hours, minutes, seconds, distance] = getLaunchDate(timerDate);

                const distanceTime = Math.abs(days) + ' д '
                    + Math.abs(hours) + ' ч '
                    + Math.abs(minutes) + ' м '
                    + Math.abs(seconds) + ' с';
                if (!distance) {
                    setTime('В ' + launch['launch']['years'] + ' году');
                    setClass('unknown');
                } else if (distance < 0) {
                    setTime(distanceTime + ' назад');
                    setClass('expired');
                } else {
                    setTime(distanceTime);
                }

            }, 1000);
            return () => clearInterval(x);
        }, []
    );


    return (
        <div className='bLaunch'>
            <p className='pVehicle'>{launch['vehicle']}</p>
            <div className='bTitle'>
                <p className='pMission'>{launch['mission']}</p>
                <p className='pLocation'>{launch['location']}</p>
                {addClass === 'expired' ? <p className='pExpired'>Завершено</p> : ''}
            </div>
            <p className='pLaunchTime'>
                {!addClass ? date : ''} <br/>
                {time}</p>
        </div>
    );
};

export default Launch;