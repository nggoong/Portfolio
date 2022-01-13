import React, { useRef, useEffect } from 'react';
import SmallTile from './SmallTile';
import SmallTileMoving from './SmallTileMoving';
import { calcValues } from '../../funcs/funcs';
import SceneInfo from '../../SceneInfo';



const SmallTileItem = ({ value }) => {

    const tile_wrapper = useRef();

    const playAnimation = (tile_wrapper_current) => {
        const values = SceneInfo[1].values;
        const currentYOffset = window.pageYOffset;
        const scrollHeight = SceneInfo[1].scrollHeight;
        const scrollRatio = currentYOffset / scrollHeight;

        tile_wrapper_current.style.transform = `translate3d(0, ${calcValues(values.small_tile_wrapper_translateY, currentYOffset, 1)}%, 0)`;

        
    }
    const scrollEventListener = () => {
        const tile_wrapper_current = tile_wrapper.current
        playAnimation(tile_wrapper_current);
    }

    const resizeEventListener= () => {
        if(SceneInfo[1].heightNum == 3) {
            const tile_wrapper_current = tile_wrapper.current;
            tile_wrapper.current.style.marginBottom = '100px;';
            
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll', scrollEventListener);
        window.addEventListener('resize', resizeEventListener);

        return(()=> {
            window.removeEventListener('scroll', scrollEventListener);
        })
    })

    

    

    return(
        <>
            <div className="small-tile-wrapper tile-container" ref={tile_wrapper}>
                <SmallTile title={value[1].title} content={value[1].content}></SmallTile>
                <SmallTileMoving title={value[2].title} content={value[2].content}></SmallTileMoving>
            </div>
        </>
    )
}

export default SmallTileItem;