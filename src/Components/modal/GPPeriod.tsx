import React, {useState} from 'react';
import "../../styles/modal/GPPeriod.css"

const GpPeriod = () => {
    const [rule,setRule] = useState(false)
    const [period,setPeriod] = useState("Последние 24 часа")
    const click = () =>{
        setPeriod("Последний час")
    }
    return (
        <div className="dropdown">
            <input type="checkbox" id="dropdown"/>
            <label htmlFor="dropdown" className="dropdown-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_326_84)">
                        <path d="M5.00065 3.99984V0.666504M11.6673 3.99984V0.666504M14.334 11.3332V14.3332H2.33398V12.3332M14.2427 5.6665H2.23532M0.333984 12.1665V12.3332H12.2673L12.3673 12.1665L12.5233 11.8392C13.7154 9.33364 14.334 6.59385 14.334 3.81917V2.33317H2.33398V3.75184C2.33401 6.54796 1.70588 9.30837 0.495984 11.8292L0.333984 12.1665Z" stroke="#2F2F2F"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_326_84">
                            <rect width="16" height="16" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>

                <span className="SortWord">{period}</span>
                <svg width="15px" height="15px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" >

                    <path d="M0 0h48v48H0z" fill="none"/>
                    <g id="Shopicon">
                        <g>
                            <polygon points="24,29.171 9.414,14.585 6.586,17.413 24,34.827 41.414,17.413 38.586,14.585 		"/>
                        </g>
                    </g>
                </svg>
            </label>

            <ul className="dropdown-content" role="menu">
                <li onClick={(e)=>{click()}}><a href="1">Последний час</a></li>
                <li><a href="2">Последние 24 часа</a></li>
                <li><a href="3">Последние 7 дней</a></li>
                <li><a href="4">Последние 30 дней</a></li>
            </ul>
        </div>
    );
};

export default GpPeriod;
