import * as launches from './launches.json';

export let getLaunches = () => {
    return launches;
};

let Launches = (id) => {
    //console.log(JSON.stringify(launches));
    console.log(launches['default'][id]['mission']);
    console.log(launches['default'][id]['launch']);
    console.log(launches['default'][id]['vehicle']);
    console.log(launches['default'][id]['location']);
};

export default Launches;