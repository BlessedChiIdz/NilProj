import React from 'react';
import "../styles/LinkPageMainPart.css"
import SortButton from "./modal/SortButton";

const LinkPageMainPart = () => {
    return (
        <div className="LinkPageMainPart">
            <div className="Top">
                <SortButton/>
            </div>
        </div>
    );
};

export default LinkPageMainPart;