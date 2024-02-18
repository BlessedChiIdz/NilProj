import React from 'react';
import HeaderMainPage from "../Components/HeaderMainPage";
import FirstContainerMainPage from "../Components/FirstContainerMainPage";
import VideoComp from "../Components/VideoComp";
import PriceMp from "../Components/PriceMP";
import "../styles/HeaderMainPage.css"
import Clients from "../Components/Clients";

const MainPage = () => {
    return (
        <div>
            <HeaderMainPage/>
            <FirstContainerMainPage/>
            <VideoComp/>
            <PriceMp/>
            <Clients/>
        </div>
    );
};

export default MainPage;
