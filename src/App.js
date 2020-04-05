import React from 'react';
import './App.css';
import Launchlist from "./Components/launchlist";
import MainLaunch from './Components/mainLaunch';

let App = () => {


    return (
        <div className="App">
            <header className="App-header">
                launchx
            </header>
            <main className='container'>
                <MainLaunch/>
                <Launchlist/>
            </main>
        </div>
    );
};

export default App;
