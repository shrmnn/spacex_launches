import React, {useState} from "react";


let Launch = (props) => {
    const [time, setTime] = useState('');
    const [addClass, setClass] = useState('');

    let launch = props['launch'];

    let date = launch['launch']['years'] + ' '
        + launch['launch']['months'] + ' '
        + launch['launch']['date'] + ' '
        + launch['launch']['hours'] + ':'
        + launch['launch']['minutes'];

    const timerDate = new Date(date).getTime();
    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = timerDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const distanceTime = Math.abs(days) + 'д ' + Math.abs(hours) + 'ч ' + Math.abs(minutes) + 'м ' + Math.abs(seconds) + 'с';
        if (!distance) {
            setTime('В ' + launch['launch']['years'] + ' году');
        } else if (distance < 0) {
            setTime(distanceTime + ' назад');
            setClass('expired');
        } else {
            setTime(date + '\n' + distanceTime);
        }

    }, 1000);

    return (
        <div className='bLaunch'>
            <p className='pVehicle'>{launch['vehicle']}</p>
            <div className='bTitle'>
                <p className='pMission'>{launch['mission']}</p>
                <p className='pLocation'>{launch['location']}</p>
                {addClass ? <p className='pExpired'>Завершено</p> : ''}
            </div>
            <p className='pLaunchTime'>{time}</p>
        </div>
    );
};

export default Launch;