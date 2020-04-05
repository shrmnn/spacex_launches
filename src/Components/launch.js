import React from "react";


let Launch = (props) => {
    console.log(props);
    return (
        <div className='bLaunch'>
            <p className='pMission'>{props['launch']['mission']}</p>
            <p className='pLaunchTime'>{JSON.stringify(props['launch']['launch'])}</p>
            <p className='pVehicle'>{props['launch']['vehicle']}</p>
            <p className='pLocation'>{props['launch']['location']}</p>
        </div>
    );
};

export default Launch;