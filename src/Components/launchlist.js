import React from "react";
import Launch from './launch';
import {getLaunches} from "./launches";
import './launch.css';

let Launchlist = () => {

    let launches = getLaunches();
    console.log(launches);
    let launchList = [];
    for (let i = 0; i < launches['default'].length; i += 1) {
        launchList.push(<Launch key={i} launch={launches['default'][i]}/>);
    }
    return (
        <div className='bLaunchList'>
            {launchList}
        </div>
    );
};

export default Launchlist;