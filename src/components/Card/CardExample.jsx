import React from 'react';
import './CardExample.scss';

function CardExample({card}) {
    return (
        <div className={'card-example'}>
            <div className="card-header">
                <p>{card.name}</p>
            </div>
            <div className="card-content">
                <p>Serviceman: {card.army.total_servicemembers}</p>
                <p>Tanks: {card.army.tanks}</p>
                <p>Aircraft:{card.army.aircraft}</p>
                <p>Navy: {card.army.navy}</p>
            </div>
        </div>
    );
}

export default CardExample;