import React from 'react';
import Header from "../../components/Header/Header";
import './Abouts.scss';

function About(props) {
    return (
        <>
            <Header currentPage={'about'}/>
            <div className={'about'}>
                <p>It is React boilerplate and i illustrate for you my card :D</p>
            </div>
        </>
    );
}

export default About;