import React, {EventHandler, MouseEvent, useCallback, useRef, useState} from 'react';
import "../../styles/Filer.css"
import Tags from "./Tags";
import {FilterProps} from "../../LogicComp/FilterProp";
import ButtonCheck from "./buttonCheck";



const Filter = () => {
    const [checkedState, setCheckedState] = useState(
        new Array(FilterProps.length).fill(false)
    );

    const revertState = (ind:number) => {
        let obj = checkedState;
        if(obj[ind] === false){
            obj[ind] = true;
        }else{
            obj[ind] = false;
        }
        setCheckedState(obj);
    }

    const Obertka = (ind:number,event: MouseEvent<HTMLButtonElement>) => {
        if (event.target instanceof HTMLElement){
            if(checkedState[ind] === true){
                event.target.style.backgroundColor = "white"
                revertState(ind);
            }

            else{
                event.target.style.backgroundColor = "black"
                revertState(ind);
            }
        }
    }

    const tegsList = useRef(null);
    const hide = () => {
        if(tegsList.current!==null && tegsList instanceof HTMLElement){
            tegsList.style.backgroundColor = "black"
        }
    }
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
            <div className="TagsDropListMainContainer" ref={tegsList}>
                {FilterProps.map((prop,index)=>
                    <div className="TagsDropContainer">
                        <div className="checkboxAndName">
                            <div className="fieldGroup">
                                <ButtonCheck num={index} click={Obertka} name={prop.nameS}/>
                            </div>
                            <div className="checkboxName"></div>
                        </div>
                        <button ></button>
                        <div className="ClickCount">1</div>
                    </div>
                )}
            </div>


        </div>
    );
};

export default Filter;