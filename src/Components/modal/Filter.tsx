import React from 'react';
import "../../styles/Filer.css"
import Tags from "./Tags";

const Filter = () => {
    return (
        <div className="Filter">
            <div className="name">
                Фильтр
            </div>
            <div className="searchBlock">
                    <img
                        src="/Lupa.svg"
                        alt="triangle with all three sides equal"
                        className="svgLupa"
                         />

                <input
                    className="SearchStyle"
                    key="search-bar"
                    placeholder={"Поиск..."}
                />
            </div>
            <hr className="hrForFilter"></hr>
            <div className="TagsMainContainer">
                <Tags/>
            </div>
        </div>
    );
};

export default Filter;