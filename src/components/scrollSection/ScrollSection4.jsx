import React, { useEffect } from 'react';

const ScrollSection4 = ({ changeRouteIndex }) => {

    const mousewheelEventListener = (e) => {
        if(e.deltaY > 0) changeRouteIndex(4);
        else changeRouteIndex(2);
    }

    useEffect(()=> {
        window.addEventListener('mousewheel', mousewheelEventListener);

        return(()=> {
            window.removeEventListener('mousewheel', mousewheelEventListener);
        })
    })

    return(
        <>
            ScrollSection4
        </>
    )
}


export default ScrollSection4;