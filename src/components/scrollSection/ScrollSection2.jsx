import React, { useEffect, useRef } from 'react';
import SceneInfo from '../../SceneInfo';
import { setLayout } from '../../funcs/funcs';
import LargeTileItem from '../TileComponent/LargeTileItem';
import LargeTileValues from '../../LargeTileValues';

const ScrollSection2 = () => {

    const container = useRef();

    useEffect(()=> {
        console.log(LargeTileValues[0]);
    }, [])


    return(
        <div id="scroll-section-2" ref={container}>
            <LargeTileItem value={LargeTileValues[0]}></LargeTileItem>
            <div className="small-tile-container">
                dkssud
            </div>
            <LargeTileItem value={LargeTileValues[0]}></LargeTileItem>
        </div>
    )
}

export default ScrollSection2;