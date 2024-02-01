import React from 'react';
import  "../../styles/noLinks.css"

const NoLinks = () => {
    return (
        <div className="mainContainerLinks">
            <div className="NoLinksWord">
                Ссылок не найдено
            </div>
            <img alt="picture" src="/TriPalochki.png" className="NoLinksPic">

            </img>
        </div>
    );
};

export default NoLinks;