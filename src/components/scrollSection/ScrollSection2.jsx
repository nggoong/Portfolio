import React, { useEffect, useRef, useCallback } from 'react';
// import SceneInfo from '../../SceneInfo';
import { setLayout, calcValues } from '../../funcs/funcs';
import LargeTileItem from '../TileComponent/LargeTileItem';
import LargeTileValues from '../../LargeTileValues';
import { useLocation } from 'react-router-dom';

const ScrollSection2 = () => {

    const container2 = useRef();
    const { pathname } = useLocation();

    useEffect(()=> {
    window.scrollTo(0,0);
    },[pathname])

    const resizeEventListener = () => {
        setLayout(1, container2);
        console.log('resize [scrollsection2]');
    }

    const scrollEventListener = useCallback(() => {
        console.log('scroll event [scrollsection2]');
    }, [])


    useEffect(()=> {
        setLayout(1, container2);
        console.log('useEffect [scrollsection2]');
    }, [])

    useEffect(()=> {
        window.addEventListener('scroll', scrollEventListener);
        window.addEventListener('resize', resizeEventListener);

        return(()=> {
            window.removeEventListener('scroll', scrollEventListener);
            window.removeEventListener('resize', resizeEventListener);
        })
    })


    return(
        <div id="scroll-section-2" ref={container2}>
            <LargeTileItem value={LargeTileValues[0]}/>
            
            <LargeTileItem value={LargeTileValues[0]}></LargeTileItem>
        </div>
    )
}

export default ScrollSection2;