import React from 'react';
import HeaderMainPage from "../Components/HeaderMainPage";
import FirstContainerMainPage from "../Components/FirstContainerMainPage";
import VideoComp from "../Components/VideoComp";
import PriceMp from "../Components/PriceMP";
import "../styles/HeaderMainPage.css"
import Clients from "../Components/Clients";
import FooterMP from "../Components/FooterMP";

const MainPage = () => {
    return (
        <div>
            <HeaderMainPage/>
            <FirstContainerMainPage/>
            <VideoComp/>
            <PriceMp/>
            <Clients/>
            <FooterMP/>
        </div>
    );
};

export default MainPage;
