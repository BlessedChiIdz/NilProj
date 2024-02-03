import React, {useState} from 'react';
import "../../styles/Filer.css"
import Tags from "./Tags";
import {FilterProps} from "../../LogicComp/FilterProp";



const Filter = () => {
    const [checkedState, setCheckedState] = useState(
        new Array(FilterProps.length).fill(false)
    );
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
            <div className="TagsDropListMainContainer">
                {checkedState.map(state=>
                    <div>
                        <input type="checkbox" className="filterCheckbox" defaultChecked={true} />
                        <div className="filterTagName">qwe</div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Filter;