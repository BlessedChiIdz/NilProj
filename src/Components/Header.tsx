import React from 'react';
import "../styles/Header.css"
import ProfileCircle from "./modal/profileCircle";
const Header = () => {
    return (
        <div className="HeaderMain">
            <div className="HeaderContentPart">
                <div className="Left">
                    <div className="circle">L</div>
                    <img alt="img" src="/svgmargin1019-g2i.svg" className="slash"/>
                    <ProfileCircle word={"A"}/>
                    <div className="ProfileName">Profile Name</div>
                </div>
                <div className="Right">
                    <ProfileCircle word={"A"}/>
                </div>
            </div>
        </div>
    );
};

export default Header;