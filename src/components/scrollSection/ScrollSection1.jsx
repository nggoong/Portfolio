import './ScrollSection.css';
import React, { useRef, useEffect, useState } from 'react';
import SceneInfo from '../../SceneInfo';
import { setLayout, calcValues } from '../../funcs/funcs';

const ScrollSection1 = () => {

    const container = useRef();
    const canvas = useRef();
    const messageA = useRef();
    const messageB = useRef();
    const messageC = useRef();
    // let context;

    



    //forwardRef()를 사용하여 ref를 props로 전달 할 수 있는 방법을 추후 고려
    useEffect(()=> {
        
        setLayout(0, container);
        
        // window.onload = () => {
        //     setCanvasImages();
        //     const context = canvas.current.getContext('2d');
        //     context.drawImage(SceneInfo[0].values.images[0], 0, 0);
        // }

        window.addEventListener('resize', ()=> {
            console.log('resize!');
            setLayout(0, container);
        });
        window.addEventListener('scroll', ()=> {
            playAnimation(0);
        })

        return()=> {
            window.removeEventListener('resize');
            window.removeEventListener('scroll');
        }
    }, []);


    // const setCanvasImages = () => {
    //     let imageElem;
        
    //     for(let i = 0; i<1; i++) {
    //         imageElem = new Image();
    //         imageElem.src = '../../images/tempImage.jpg';
    //         SceneInfo[0].values.images.push(imageElem);
            
    //     }
    // }

    

    const playAnimation = () => {
        const values = SceneInfo[0].values;
        const currentYOffset = window.pageYOffset;
        const scrollHeight = SceneInfo[0].scrollHeight;
        const scrollRatio = currentYOffset / scrollHeight;
        let imageElem = new Image();
        imageElem.src='https://e7.pngegg.com/pngimages/944/968/png-clipart-donuts-homer-simpson-the-simpsons-ride-lisa-simpson-bart-simpson-bart-simpson-donuts-homer-simpson-thumbnail.png';
        imageElem.onload = function() {
            const context = canvas.current.getContext('2d');
            context.drawImage(imageElem, 0, 0);
        }

        


        // const context = canvas.current.getContext('2d');
        // context.drawImage(values.images[0], 0, 0);
        
        if (scrollRatio <= 0.105) {
            // in
            messageA.current.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset, 0);
            messageA.current.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_in, currentYOffset, 0)}%, 0)`;
        } else {
            // out
            messageA.current.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset, 0);
            messageA.current.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_out, currentYOffset, 0)}%, 0)`;
        }

        if (scrollRatio <= 0.305) {
            // in
            messageB.current.style.opacity = calcValues(values.messageB_opacity_in, currentYOffset, 0);
            messageB.current.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_in, currentYOffset, 0)}%, 0)`;
        } else {
            // out
            messageB.current.style.opacity = calcValues(values.messageB_opacity_out, currentYOffset, 0);
            messageB.current.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_out, currentYOffset, 0)}%, 0)`;
        }

        if (scrollRatio <= 0.505) {
            // in
            messageC.current.style.opacity = calcValues(values.messageC_opacity_in, currentYOffset, 0);
            messageC.current.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_in, currentYOffset, 0)}%, 0)`;
        } else {
            // out
            messageC.current.style.opacity = calcValues(values.messageC_opacity_out, currentYOffset, 0);
            messageC.current.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_out, currentYOffset, 0)}%, 0)`;
        }


				
    }

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
                <p>권익주 입니다.</p>
            </div>
            <canvas className="image-blend-canvas" width='1920' height='1080' ref={canvas}> 
            </canvas>
        </div>
    )
}

export default ScrollSection1;