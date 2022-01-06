import './ScrollSection.css';
import React, { useRef, useEffect, useState } from 'react';
import SceneInfo from '../../SceneInfo';
import { setLayout, calcValues } from '../../funcs/funcs';
import blendImage from '../../images/tempImage.jpg';

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
        canvas.current.style.marginTop = `${SceneInfo[0].scrollHeight * 0.5}px`;
        playAnimation(0);
        
        // window.onload = () => {
        //     setCanvasImages();
        //     const context = canvas.current.getContext('2d');
        //     context.drawImage(SceneInfo[0].values.images[0], 0, 0);
        // }

        window.addEventListener('resize', ()=> {
            console.log('resize!');
            setLayout(0, container);
            canvas.current.style.maginTop = `${SceneInfo[0].scrollHeight * 0.5}px`;
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
        const widthRatio = window.innerWidth / canvas.current.width;
        const heightRatio = window.innerHeight / canvas.current.height;
        let canvasScaleRatio;
        let imageElem = new Image();
        const context = canvas.current.getContext('2d');
        imageElem.src= blendImage;

        if(widthRatio <= heightRatio) {
            // 캔버스보다 브라우저 창이 홀쭉한 경우
            canvasScaleRatio = heightRatio;
        }
        else {
            // 캔버스보다 브라우저 창이 납작한 경우
            canvasScaleRatio = widthRatio;
        }

        canvas.current.style.transform = `scale(${canvasScaleRatio})`;
        

        imageElem.onload = function() {
            context.fillStyle = 'black';
            context.drawImage(imageElem, 0, 0);
        }
        const recalculatedInnerWidth = document.body.offsetWidth / canvasScaleRatio;
        const recalculatedInnerHeight = window.innerHeight / canvasScaleRatio;

        if (!values.rectStartY) {
            // values.rectStartY = objs.canvas.getBoundingClientRect().top;
            values.rectStartY = canvas.current.offsetTop + (canvas.current.height - canvas.current.height * canvasScaleRatio) / 2;
            values.rect1X[2].start = (window.innerHeight / 2) / scrollHeight;
            values.rect2X[2].start = (window.innerHeight / 2) / scrollHeight;
            values.rect1X[2].end = values.rectStartY / scrollHeight;
            values.rect2X[2].end = values.rectStartY / scrollHeight;
        }

        const whiteRectWidth = recalculatedInnerWidth * 0.15;
        values.rect1X[0] = (canvas.current.width - recalculatedInnerWidth) / 2
        values.rect1X[1] = values.rect1X[0] - whiteRectWidth;
        values.rect2X[0] = values.rect1X[0] + recalculatedInnerWidth - whiteRectWidth;
        values.rect2X[1] = values.rect2X[0] + whiteRectWidth;

        context.fillRect(
            parseInt(calcValues(values.rect1X, currentYOffset, 0)),
            0,
            parseInt(whiteRectWidth),
            canvas.current.height
        );
        context.fillRect(
            parseInt(calcValues(values.rect2X, currentYOffset, 0)),
            0,
            parseInt(whiteRectWidth),
            canvas.current.height
        );


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