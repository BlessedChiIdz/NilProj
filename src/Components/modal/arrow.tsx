import React, {useState} from 'react';
import "../../styles/modal/arrow.css"
const Arrow = () => {
    const [deg,setDeg] = useState(false)
    interface clickInt{
        (event:React.MouseEvent<HTMLDivElement,MouseEvent>) : void
    }
    const click:clickInt = (event) =>{
        if(event.target instanceof HTMLElement){
            if(deg == false){
                event.target.style.transform = "rotate(90deg)"
                setDeg(true)
            }
            else{
                event.target.style.transform = "rotate(270deg)"
                setDeg(false)
            }
        }
    }
    return (
        <div className="arrowMainContainer" onClick={event => {click(event)}}>

        </div>
    );
};

export default Arrow;
