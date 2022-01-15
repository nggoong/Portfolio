import React, { useEffect } from 'react';

const ScrollSection5 = ({ changeRouteIndex }) => {

    const mousewheelEventListener = (e) => {
        if(e.deltaY > 0) return;
        else changeRouteIndex(3);
    }

    useEffect(()=> {
        window.addEventListener('mousewheel', mousewheelEventListener);

        return(()=> {
            window.removeEventListener('mousewheel', mousewheelEventListener);
        })
    })

    return(
        <>
            항상 배우는 자세로 성장할 기회를 잡자
            프로젝트 전체를 완성하는 것 뿐만 아니라
            기능 하나를 구현하는 거에도 큰 희열을 느끼는

            사소한 것이라도 항상 배우는 자세로 임하겠습니다

            열정, 배우는 자세, 낮은 자세

            열린 마인드
        </>
    )
}

export default ScrollSection5;