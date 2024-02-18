import React from 'react';
import "../styles/Clients.css"
const Clients = () => {
    return (
        <div>
            <div className="Clients">
            Клиенты
            </div>
            <div className="RowsPicsMP">
                <img src="/ClientsRow.png" className="PicsMPClients"/>
            </div>
            <div className="RowsPicsMP">
                <img src="/ClientsRow2.png" className="PicsMPClients"/>
            </div>
        </div>
    );
};

export default Clients;
