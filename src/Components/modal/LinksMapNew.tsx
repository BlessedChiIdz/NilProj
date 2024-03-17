import React, {useRef, useState} from 'react';
import "../../styles/modal/LinksMapNew.css"
import TwoIcons from "./TwoIcons";
import ThreeIcons from "./ThreeIcons";
import OneIcon from "./OneIcon";

interface LinksMapInt{
    Data:string,
    SvgPath:string,
    pathS:string,
    pathL:string,
    UTM:boolean,
    Android:boolean,
    IOS:boolean,
    clicks:number;
}



const LinksMapNew:React.FC<LinksMapInt> = ({Data,SvgPath,pathS,pathL,UTM,Android,IOS,clicks}:LinksMapInt) => {
    const ref = useRef<HTMLDivElement>(null);
    let count = 0;
    if(UTM) count++;
    if(Android) count++;
    if(IOS) count++;
    const [flagTimer,setFlagTimer] = useState(true)
    const [flagTag,setFlagTag] = useState(true)
    return (
        <div className="mainCLMP">
            {flagTimer &&
            <div className="timerCLMP">
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.8453 8C5.11869 5.80761 6.98891 4.11111 9.25535 4.11111C11.71 4.11111 13.6998 6.10096 13.6998 8.55556C13.6998 11.0102 11.71 13 9.25535 13H6.47779M9.25557 8.55556V6.33333M8.14446 3H10.3667M3.70001 9.66667H6.47779M4.81112 11.3333H7.5889" stroke="black" stroke-width="1.06667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            }
            {
                flagTag &&
                <div className="tegCLMP">
                    marketingqweqwe
                </div>
            }
                <div style={{display:"inline-block"}}>
                    <div className="SVGCOntLP">
                        <img className="SVGLinksLP" src={SvgPath}/>
                    </div>
                </div>
                <div className="LinksDateCopy">
                    <div className="LinksDateTop">
                        <div style={{float:"left"}}>
                            <div className="ShortLinkLPMP">
                                {pathS}
                            </div>
                            <div style={{display:"inline-block",marginLeft:"5px"}}>
                                <div className="blockForCopySVG">
                                    <svg width="15" height="15" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.69974 8.9645H3.69974C3.14724 8.9645 2.69974 8.5085 2.69974 7.9465V2.518C2.69974 1.955 3.14724 1.5 3.69974 1.5H7.69974C8.25224 1.5 8.69974 1.9555 8.69974 2.518V3.451M5.69974 3.536H9.69974C10.2522 3.536 10.6997 3.991 10.6997 4.5535V9.982C10.6997 10.545 10.2522 11 9.69974 11H5.69974C5.14724 11 4.69974 10.5445 4.69974 9.982V4.5535C4.69974 3.9915 5.14724 3.536 5.69974 3.536Z" stroke="#374151" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ref={ref} className="LinksDateBottom">
                        <div style={{fontWeight:300,fontSize:"14px"}}>{Data}</div>
                        <div className="blurPathL" style={{marginLeft:"10px"}}>{pathL}</div>
                        <div className="BlurAbsolute"></div>
                    </div>
                </div>
                <div className="rightmainCLMP">
                    {count === 3 ?
                    <div className="threeIconsDevices">
                        <ThreeIcons/>
                    </div>
                        :
                    <div className="TwoIconsContainer">
                        {count === 2 ?
                        <div className="TwoIconsD">
                            <TwoIcons UTM={UTM} IOS={IOS} Android={Android}/>
                        </div>
                            :
                        <div className="OneIconD" style={{height:"26px"}}>
                            <OneIcon UTM={UTM} IOS={IOS} Android={Android}/>
                        </div>
                        }
                    </div>
                    }
                    <div style={{width:"91px",height:"26px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#F3F4F6",borderRadius:"6px",marginLeft:"15px"}}>
                        <a style={{float:"left",paddingTop:"5px"}}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 13.3334V6.66669" stroke="#374151" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 13.3334V2.66669" stroke="#374151" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4 13.3334V10.6667" stroke="#374151" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                        <div className="CLicksTextANum">{clicks} clicks</div>
                    </div>
                    <div style={{height:"max-content",marginLeft:"auto"}}>
                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3667 11.25C11.3667 12.2625 10.5459 13.0833 9.53335 13.0833C8.5208 13.0833 7.70001 12.2625 7.70001 11.25C7.70001 10.2374 8.5208 9.41666 9.53335 9.41666C10.5459 9.41666 11.3667 10.2374 11.3667 11.25Z" stroke="black" stroke-width="1.28" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.3667 17.6667C11.3667 18.6792 10.5459 19.5 9.53335 19.5C8.5208 19.5 7.70001 18.6792 7.70001 17.6667C7.70001 16.6541 8.5208 15.8333 9.53335 15.8333C10.5459 15.8333 11.3667 16.6541 11.3667 17.6667Z" stroke="black" stroke-width="1.28" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.3667 4.83333C11.3667 5.84586 10.5459 6.66667 9.53335 6.66667C8.5208 6.66667 7.70001 5.84586 7.70001 4.83333C7.70001 3.82081 8.5208 3 9.53335 3C10.5459 3 11.3667 3.82081 11.3667 4.83333Z" stroke="black" stroke-width="1.28" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
        </div>
    );
};

export default LinksMapNew;
