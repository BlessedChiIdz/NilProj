import React, {useState} from 'react';
import "../../styles/Filer.css"
import Tags from "./Tags";
import {FilterProps} from "../../LogicComp/FilterProp";



const Filter = () => {
    const [checkedState, setCheckedState] = useState(
        new Array(FilterProps.length).fill(false)
    );
    {console.log(checkedState)}
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
                {FilterProps.map(prop=>

                    <div className="TagsDropContainer">
                        <div className="checkboxAndName">

                            <input type="checkbox" id="reading" className="checkboxTag"></input>
                            <label htmlFor="reading" className="checkboxLable"></label>
                            <div className="checkboxName">{prop.nameS}</div>
                        </div>
                        <div className="ClickCount">1</div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Filter;