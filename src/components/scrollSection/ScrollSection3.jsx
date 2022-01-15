import React, { useEffect } from 'react';

const ScrollSection3 = ({ changeRouteIndex }) => {

    const mousewheelEventListener = (e) => {
        if(e.deltaY > 0) changeRouteIndex(3);
        else changeRouteIndex(1);
    }

    useEffect(()=> {
        window.addEventListener('mousewheel', mousewheelEventListener);

        return(()=> {
            window.removeEventListener('mousewheel', mousewheelEventListener);
        })
    })

    return(
        <>
        scrollsection-3
        </>

    )
}

export default ScrollSection3;