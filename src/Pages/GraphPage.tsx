import React from 'react';
import HeaderMainPage from "../Components/HeaderMainPage";
import "../styles/GraphPage.css"
import GPPeriod from "../Components/modal/GPPeriod";
import Chart from "../Components/modal/Chart";
import AddresGp from "../Components/modal/AddresGp";
const GraphPage = () => {
    return (
        <div>
            <HeaderMainPage></HeaderMainPage>
            <div className="GPMainContainer">
                <div className="GPCenterContainer">
                    <div className="LinkAndPeriod">
                        <div className="GPLink">
                            NirUrl.com/try
                        </div>
                        <div className="GPPeriod">
                            <GPPeriod/>
                        </div>
                    </div>
                    <div className="Charts">
                        <div className="countOfViewsPeriod">66</div>
                        <div className="GlobalCountOfViewText">Общее количество кликов</div>
                        <Chart/>
                    </div>
                    <div className="OptionsInGP">
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <div className="AddressesInGP">
                                <AddresGp/>
                            </div>
                            <div className="DevicesInGP">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GraphPage;
