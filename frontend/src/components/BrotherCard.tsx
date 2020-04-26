import React from 'react';
import { IBrotherCard } from '../interfaces/IBrotherCard';

const BrotherCard = React.memo<IBrotherCard>(({ brother }) => {

    return (
        <div className="card bro-card">
            <div className="bro-card-details">
                <img className="bro-card-pic" src="photos/example.jpg"></img>
                <div className="bro-card-details">
                    <div className="bro-card-content card-text">
                        <h5>{`${brother.firstName} ${brother.middleName} ${brother.lastName} #${brother.brotherNumber}`}</h5>
                        <div>
                            <strong>Pledge Class: </strong>
                            {brother.pledgeClass}
                        </div>
                        <div>
                            <strong>Family: </strong>
                            {brother.family}
                        </div>
                        <div>
                            <strong>Nickname: </strong>
                            {brother.nickname}
                        </div>
                        <div>
                            <strong>Positions: </strong>
                            {(brother.positions && brother.positions.length > 0) || 'None Found'}
                        </div>
                    </div>
                    <div className="bro-card-content">
                        {/* TODO: Buttons for visuals will go here */}
                    </div>
                </div>
            </div>
            <div className="bro-card-detail">
                <div>
                    <strong>Line: </strong>
                    {brother.line ? (
                        brother.line.map((names, distance) => {
                            return (
                                <div key={brother._id + "_" + distance}>
                                    <strong>{distance === 1 ? 'Little:' : <>Grand<sup>{distance - 1}</sup>-Little:</>}</strong>
                                    {names.join(', ')}
                                </div>
                            );
                        })
                    ) : (
                            <span>None Found</span>
                        )}
                </div>
            </div>
        </div>
    )
});

export default BrotherCard;
