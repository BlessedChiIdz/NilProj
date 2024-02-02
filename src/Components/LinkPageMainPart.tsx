import React, {useEffect, useState} from 'react';
import "../styles/LinkPageMainPart.css"
import SortButton from "./modal/SortButton";
import Filter from "./modal/Filter";
import Search from "./modal/Search";
import NoLinks from "./noLinks";

const LinkPageMainPart = () => {
    const [flag, setFlag] = useState(false);
    useEffect(()=>{

    },[])
    return (
        <div className="LinkPageMainPart">
            <div className="TopContainer">
                <div className="Top">
                    <SortButton/>
                </div>
            </div>
            <div className="MainContainer">
                <div className="FilerContainer">
                    <Filter/>
                    <Search/>
                </div>
                <div className="LinksContainer">
                    {flag ? (
                        <div>yes</div>
                    ):(
                        <NoLinks/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LinkPageMainPart;