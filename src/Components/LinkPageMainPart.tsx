import React, {useEffect, useState} from 'react';
import "../styles/LinkPageMainPart.css"
import SortButton from "./modal/SortButton";
import Filter from "./modal/Filter";
import Search from "./modal/Search";
import NoLinks from "./noLinks";
import LinksMap from "./modal/LinksMap";
import LinksMapNew from "./modal/LinksMapNew";

const LinkPageMainPart = () => {
    const [flag, setFlag] = useState(true);
    useEffect(()=>{

    },[])
    return (
        <div className="LinkPageMainPart" >
            <div className="TopContainer">
                <div className="Top">
                    <SortButton/>
                </div>
            </div>
            <div className="MainContainer">
                <div className="FilerContainer">
                    <Filter/>
                </div>
                <div className="LinksContainer">
                        <LinksMapNew Data={"24/03/24"} clicks={3} pathS={"nil-url.ru/Ffv3cv"} pathL={"https://www.svgrepo.com/collection/dazzle-line-iconsm/collectionqqqqqqqqqqqqqqqqqqqqq"} SvgPath={"/test.svg"} Android={true} IOS={true} UTM={true}/>
                        <LinksMapNew Data={"24/03/24"} clicks={3} pathS={"nil-url.ru/Ffv3cv"} pathL={"https://www.svgrepo.com/collection/dazzle-line-iconsm/collection"} SvgPath={"/test.svg"} Android={false} IOS={false} UTM={true}/>
                        <LinksMapNew Data={"24/03/24"} clicks={3} pathS={"nil-url.ru/Ffv3cv"} pathL={"https://www.svgrepo.com/collection/dazzle-line-iconsm/collection"} SvgPath={"/test.svg"} Android={false} IOS={true} UTM={true}/>
                </div>
            </div>
        </div>
    );
};

export default LinkPageMainPart;
