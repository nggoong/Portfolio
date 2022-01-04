import './ScrollSection.css';
import React, { useRef, useEffect } from 'react';
// import SceneInfo from '../../SceneInfo';
import { setLayout } from '../../funcs/funcs';

const ScrollSection1 = () => {

    const container = useRef();
    const messageA = useRef();
    const messageB = useRef();
    const messageC = useRef();


    useEffect(()=> {
        setLayout(0, container);
    }, []);

    return(
        <div className='scroll-section' id='scroll-section-1' ref={container}>
            <h1>안녕하세요</h1>
            <div className='sticky-elem main-message' ref={messageA}>
                <p>간단하면서 사용자 친화적인<br/>디자인을 추구하며 </p>
            </div>
            <div className='sticky-elem main-message' ref={messageB}>
                <p>유능한 프론트엔드<br/>개발자가 되고 싶은 </p>
            </div>
            <div className='sticky-elem main-message' ref={messageC}>
                <p>Kwon Ik Joo<br/>입니다.</p>
            </div>
        </div>
    )
}

export default ScrollSection1;