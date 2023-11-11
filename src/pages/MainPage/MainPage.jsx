import React, {useState} from 'react';
import Header from "../../components/Header/Header";
import './MainPage.scss';
import CardExample from "../../components/Card/CardExample";
import {countriesData} from "../../data/country";

function MainPage(props) {


    const [countries, setCountries] = useState(countriesData);

    return (
        <>
            <Header currentPage={'main'}/>
            <div className={'main-page'}>
                <div className="main-page-header">
                    <h1>It is React boilerplate</h1>
                </div>
                <div className="main-page-content">
                    {countries.countries.map((country, index) => (
                        <CardExample card={country}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default MainPage;