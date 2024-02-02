import React from 'react';
import "../../styles/Filer.css"

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
            <hr className="hrForFilter"/>
            <div>

            </div>
        </div>
    );
};

export default Filter;