import React from 'react';
import HeaderMainPage from "../Components/HeaderMainPage";
import FirstContainerMainPage from "../Components/FirstContainerMainPage";
import VideoComp from "../Components/VideoComp";
import PriceMp from "../Components/PriceMP";

const MainPage = () => {
    return (
        <div>
            <HeaderMainPage/>
            <FirstContainerMainPage/>
            <VideoComp/>
            <PriceMp/>
        </div>
    );
};

export default MainPage;
