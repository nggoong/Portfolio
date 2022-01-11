import React from 'react';

const LargeTileItem = ({ value }) => {

    return(
        <>
            <div className="large-tile-container tile-container">
                <div className="large-tile-title">
                    <h1>{value.title}</h1>
                </div>
                <div className="large-tile-content">
                    <p>{value.content1}<br/>{value.content2}<br/>{value.content3}</p>   
                </div>
            </div>
        </>
    )
}

export default LargeTileItem;