import React, { useEffect, useRef, useCallback } from 'react';
import { setLayout } from '../../funcs/funcs';
import LargeTileItem from '../TileComponent/LargeTileItem';
import LargeTileValues from '../../LargeTileValues';
import SmallTileItem from '../TileComponent/SmallTileItem';
import { useLocation } from 'react-router-dom';
import SceneInfo from '../../SceneInfo';
import MediumTileItem from '../TileComponent/MediumTileItem';

const ScrollSection2 = ({changeRouteIndex}) => {

    const container2 = useRef();
    const { pathname } = useLocation();

    useEffect(()=> {
    window.scrollTo(0,0);
    },[pathname])

    const mouseWheelEventListener = (e) => {
        
        let currentYScroll = window.pageYOffset;
        console.log(currentYScroll);
        console.log(SceneInfo[1].scrollHeight);
        if(currentYScroll + window.innerHeight >= SceneInfo[1].scrollHeight && e.deltaY > 0) {
            changeRouteIndex(2);
        }
        else if(currentYScroll == 0 && e.deltaY < 0) changeRouteIndex(0);
    }

    const resizeEventListener = () => {
        setLayout(1, container2);
        console.log('resize [scrollsection2]');
    }


    const scrollEventListener = useCallback(() => {
        console.log('scroll event [scrollsection2]');
        console.log(window.pageYOffset + window.innerHeight);
        console.log(SceneInfo[1].scrollHeight);
    }, [])


    useEffect(()=> {
        setLayout(1, container2);
        console.log('useEffect [scrollsection2]');
        changeRouteIndex(1);
    }, [])

    useEffect(()=> {
        window.addEventListener('scroll', scrollEventListener);
        window.addEventListener('resize', resizeEventListener);
        window.addEventListener('mousewheel', mouseWheelEventListener);
        return(()=> {
            window.removeEventListener('scroll', scrollEventListener);
            window.removeEventListener('resize', resizeEventListener);
            window.removeEventListener('mousewheel', mouseWheelEventListener);
        })
    })


    return(
        <div id="scroll-section-2" className='scroll-section' ref={container2}>
            <LargeTileItem value={LargeTileValues[0]}/>
            <SmallTileItem value={LargeTileValues}/>
            <MediumTileItem value={LargeTileValues[3]}/>
        </div>
    )
}

export default ScrollSection2;