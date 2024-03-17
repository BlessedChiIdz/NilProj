import React from 'react';
import HeaderMainPage from "../Components/HeaderMainPage";
import "../styles/GraphPage.css"
import GPPeriod from "../Components/modal/GPPeriod";
const GraphPage = () => {
    return (
        <div>
            <HeaderMainPage></HeaderMainPage>
            <div className="GPMainContainer">
                <div className="GPCenterContainer">
                    <div className="GPLink">
                        qwe
                    </div>
                    <div className="GPPeriod">
                        <GPPeriod/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GraphPage;
