import React from 'react';
import "../../styles/Clients.css"
const Clients = () => {
    return (
        <div style={{marginBottom:"50px"}}>
            <div className="Clients">
            Клиенты
            </div>
            <div className="RowsPicsMP">
                <img src="/public/ClientsRow.png" className="PicsMPClients"/>
            </div>
            <div className="RowsPicsMP">
                <img src="/public/ClientsRow2.png" className="PicsMPClients"/>
            </div>
        </div>
    );
};

export default Clients;
