import React, { useEffect, useRef } from 'react';
import SceneInfo from '../../SceneInfo';
import { calcValues } from '../../funcs/funcs';

const SmallTileMoving = ({ title, content }) => {

    const smallTileContainerRef= useRef();

    const scrollEventListener = () => { 
        const smallTileContainerRef_current = smallTileContainerRef.current;
        playAnimation(smallTileContainerRef_current);
    }

    const playAnimation = (smallTileContainerRef_current) => {
        const values = SceneInfo[1].values;
        const currentYOffset = window.pageYOffset;
        const scrollHeight = SceneInfo[1].scrollHeight;
        const scrollRatio = currentYOffset / scrollHeight;

        smallTileContainerRef_current.style.transform = `translate3d(0, ${calcValues(values.small_tile_moving_translateY, currentYOffset, 1)}%, 0)`;
    }

    useEffect(()=> {
        window.addEventListener('scroll',scrollEventListener);

        return(()=> {
            window.removeEventListener('scroll', scrollEventListener);
        })
    })



    return(
        <>
        <div className='small-tile-moving-container' ref={smallTileContainerRef}>
            <div className="small-tile-moving-title tile-title moving">
                <h1>{title}</h1>
            </div>
            <div className="small-tile-moving-content tile-content moving">
                <pre>{content}</pre>
            </div>
        </div>
        </>
    )
}


export default SmallTileMoving;