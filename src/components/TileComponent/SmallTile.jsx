import React from 'react';

const SmallTile = ({ title, content }) => {



    return(
        <>
            <div className="small-tile-container">
                <div className="small-tile-title tile-title">
                    <h1>{title}</h1>
                </div>
                <div className="small-tile-content tile-content">
                    <pre>{content}</pre>
                </div>
            </div>
        </>

    )
}

export default SmallTile;