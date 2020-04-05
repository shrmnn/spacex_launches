import * as launches from './launches.json';

export let getLaunches = () => {
    return launches;
};

export const getNextLaunch = () => {
    const launches = getLaunches();
    let launch = launches['default'];
    let nextLaunch = 0;
    for (let i = 0; i < launches['default'].length; i += 1) {
        let date = launch[i]['launch']['years'] + ' '
            + launch[i]['launch']['months'] + ' '
            + launch[i]['launch']['date'] + ' '
            + launch[i]['launch']['hours'] + ':'
            + launch[i]['launch']['minutes'];

        const timerDate = new Date(date).getTime();
        const now = new Date().getTime();
        const distance = timerDate - now;
        if (distance > 0) {
            nextLaunch = i;
            return nextLaunch;
        }
    }
    return nextLaunch;

};

export const getLaunchDate = (timerDate) => {
    const now = new Date().getTime();
    const distance = timerDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return [days, hours, minutes, seconds, distance];
};

export const getTimeDate = (launch) => {
    const date = launch['years'] + ' '
        + launch['months'] + ' '
        + launch['date'] + ' '
        + launch['hours'] + ':'
        + launch['minutes'];
    return date;
};

let Launches = (id) => {
    //console.log(JSON.stringify(launches));
    /*console.log(launches['default'][id]['mission']);
    console.log(launches['default'][id]['launch']);
    console.log(launches['default'][id]['vehicle']);
    console.log(launches['default'][id]['location']);*/

    return launches['default'][id];
};

export default Launches;