import React from 'react';
import "../../styles/SortButton.css"
const SortButton = () => {
    return (
        <div className="dropdown">
            <input type="checkbox" id="dropdown"/>
            <label htmlFor="dropdown" className="dropdown-btn">
                <img src="/TriPalochki.png"/>
                <span>Сортировать</span>
                <span className="arrow"></span>
            </label>

            <ul className="dropdown-content" role="menu">
                <li><a href="#">React</a></li>
                <li><a href="#">Angular</a></li>
                <li><a href="#">Vue</a></li>
                <li><a href="#">Svelte</a></li>
            </ul>
        </div>
    );
};

export default SortButton;