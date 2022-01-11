import React, { useEffect, useRef } from 'react';
// import SceneInfo from '../../SceneInfo';
import { setLayout, calcValues } from '../../funcs/funcs';
import LargeTileItem from '../TileComponent/LargeTileItem';
import LargeTileValues from '../../LargeTileValues';

const ScrollSection2 = () => {

    const container = useRef();

    const loadEventListener = () => {
        setLayout(1, container);
    }

    const resizeEventListener = () => {
        setLayout(1, container);
    }

    const scrollEventListener = () => {
        console.log('scroll event');
    }

    useEffect(()=> {
        window.addEventListener('load', loadEventListener);
        window.addEventListener('resize', resizeEventListener);
        window.addEventListener('scroll', scrollEventListener);
    }, [])


    return(
        <div id="scroll-section-2" ref={container}>
            <LargeTileItem value={LargeTileValues[0]}/>
            <div className="small-tile-container">
                gg
            </div>
            <LargeTileItem value={LargeTileValues[0]}></LargeTileItem>
        </div>
    )
}

export default ScrollSection2;