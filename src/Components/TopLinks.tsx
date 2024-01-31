import React from 'react';
import "../styles/TopLinks.css"
import CreateLinkButton from "./modal/CreateLinkButton";

const TopLinks = () => {
    return (
        <div className="mainContainer">
            <div className="contentContainer">
                <div className="left">
                    My Links
                </div>
                <div className="right">
                    <CreateLinkButton/>
                </div>
            </div>
        </div>
    );
};

export default TopLinks;