import './ScrollSection.css';
import React, { useRef, useEffect, useCallback } from 'react';
import SceneInfo from '../../SceneInfo';
import { setLayout, calcValues } from '../../funcs/funcs';
import firstBlendImage from '../../images/canvasBlendImage-1.jpg';
import secondBlendImage from '../../images/canvasBlendImage-2.jpg';
import { useLocation } from 'react-router-dom';

const ScrollSection1 = ({ changeRouteIndex }) => {
    const container1 = useRef();
    const canvas = useRef();
    const messageA = useRef();
    const messageB = useRef();
    const messageC = useRef();
    // let context;
    const { pathname } = useLocation();

    let imageElem;
    let imageElem2;

    useEffect(()=> {
        setLayout(0, container1);
        canvas.current.style.marginTop = `${SceneInfo[0].scrollHeight * 0.5}px`;
    }, []);

    // useEffect(()=> {
    //     window.scrollTo(0,0);
    // },[pathname])

    useEffect(()=> {
        const context = canvas.current.getContext('2d');
        window.addEventListener('load', loadEventListener(context));
        window.addEventListener('resize', resizeEventListener);
        window.addEventListener('scroll', scrollEventListener);
        window.addEventListener('mousewheel', mouseWheelEventListener);
        
        

        return()=> {
            window.removeEventListener('load', loadEventListener);
            window.removeEventListener('resize', resizeEventListener);
            window.removeEventListener('scroll', scrollEventListener);
            window.removeEventListener('mousewheel', mouseWheelEventListener);
    }
})


    const loadEventListener = (context) => {
        setCanvasImages();
        context.drawImage(imageElem, 0, 0);
    }

    const resizeEventListener = () => {
        setLayout(0, container1);
        // playAnimation();
        canvas.current.style.maginTop = `${SceneInfo[0].scrollHeight * 0.5}px`;
    }
    
    const scrollEventListener = () => {
        // const container1_current = container1.current;
        // const messageA_current = messageA.current;
        // const messageB_current = messageB.current;
        // const messageC_current = messageC.current;
        const canvas_current = canvas.current;
        playAnimation(canvas_current);
        // console.log(currentScrollY);
        // console.log(SceneInfo[0].scrollHeight - (window.innerHeight / 2));
        // padding-top:50vh 때문에 innerHeight / 2 를 한 값을 반영해야함.
        // console.log(e);
        
    }

    const mouseWheelEventListener = (e) => {
        let currentYScroll = window.pageYOffset;
        if(currentYScroll + (window.innerHeight / 2) > SceneInfo[0].scrollHeight && e.deltaY > 0) {
            changeRouteIndex(1);
        }
        else if(currentYScroll <= 0 && e.deltaY < 0) return;
    }
    


    const setCanvasImages = () => {
        // let imageElem3;
        // for (let i = 0; i<SceneInfo[0].values.imagePath.length; i++) {
        //     imageElem3 = new Image();
        //     imageElem3.src = SceneInfo.values.imagePath[i];
        //     SceneInfo[0].values.images.push(imageElem3);
        // }
        imageElem = new Image();
        imageElem2 = new Image();
        imageElem.src = firstBlendImage;
        imageElem2.src = secondBlendImage;
        
    }

    

    const playAnimation = (canvas_current) => {
        const values = SceneInfo[0].values;
        const currentYOffset = window.pageYOffset;
        const scrollHeight = SceneInfo[0].scrollHeight;
        const scrollRatio = currentYOffset / scrollHeight;
        const widthRatio = window.innerWidth / canvas_current.width;
        const heightRatio = window.innerHeight / canvas_current.height;
        let canvasScaleRatio;
        

        const context = canvas_current.getContext('2d');

        let imageElem = new Image();
        let imageElem2 = new Image();
        
        imageElem.src= values.imagePath[0];
        imageElem2.src = values.imagePath[1];

        if(widthRatio <= heightRatio) {
            // 캔버스보다 브라우저 창이 홀쭉한 경우
            canvasScaleRatio = heightRatio;
        }
        else {
            // 캔버스보다 브라우저 창이 납작한 경우
            canvasScaleRatio = widthRatio;
        }

        canvas_current.style.transform = `scale(${canvasScaleRatio})`;
        context.fillStyle = 'white';
        context.drawImage(imageElem, 0, 0);

        const recalculatedInnerWidth = document.body.offsetWidth / canvasScaleRatio;

        if (!values.rectStartY) {
            values.rectStartY = canvas_current.offsetTop + (canvas_current.height - canvas_current.height * canvasScaleRatio) / 2;
            values.rect1X[2].start = (window.innerHeight / 2) / scrollHeight;
            values.rect2X[2].start = (window.innerHeight / 2) / scrollHeight;
            values.rect1X[2].end = values.rectStartY / scrollHeight;
            values.rect2X[2].end = values.rectStartY / scrollHeight;
        }

        const whiteRectWidth = recalculatedInnerWidth * 0.5;
        values.rect1X[0] = (canvas_current.width - recalculatedInnerWidth) / 2
        values.rect1X[1] = values.rect1X[0] - whiteRectWidth;
        values.rect2X[0] = values.rect1X[0] + recalculatedInnerWidth - whiteRectWidth;
        values.rect2X[1] = values.rect2X[0] + whiteRectWidth;


        context.fillRect(
            parseInt(calcValues(values.rect1X, currentYOffset, 0)),
            0,
            parseInt(whiteRectWidth),
            canvas_current.height
        );
        context.fillRect(
            parseInt(calcValues(values.rect2X, currentYOffset, 0)),
            0,
            parseInt(whiteRectWidth),
            canvas_current.height
        );

        if(scrollRatio < values.rect1X[2].end) {
            canvas_current.style.marginTop = `${SceneInfo[0].scrollHeight * 0.5}px`;
            canvas_current.classList.remove('sticky');
        }
        else {
            values.blendHeight[0] = 0;
            values.blendHeight[1] = canvas_current.height;
            values.blendHeight[2].start = values.rect1X[2].end;
            values.blendHeight[2].end = values.blendHeight[2].start + 0.15;
            const blendHeight = calcValues(values.blendHeight, currentYOffset, 0);
            context.drawImage(imageElem2,
                0, canvas_current.height - blendHeight, canvas_current.width, blendHeight,
                0, canvas_current.height - blendHeight, canvas_current.width, blendHeight
            );

            canvas_current.style.marginTop = 0;
            canvas_current.classList.add('sticky');
            canvas_current.style.top = `${-(canvas_current.height - canvas_current.height * canvasScaleRatio) / 2}px`;

            if(scrollRatio > values.blendHeight[2].end) {
                values.canvas_scale[0] = canvasScaleRatio;
                values.canvas_scale[1] = document.body.offsetWidth / (1.5* canvas_current.width);

                values.canvas_scale[2].start = values.blendHeight[2].end;
                values.canvas_scale[2].end = values.canvas_scale[2].start + 0.15;

                canvas_current.style.transform = `scale(${calcValues(values.canvas_scale, currentYOffset, 0)})`;
                
            }
        }

        
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
        <div className='scroll-section' id='scroll-section-1' ref={container1}>
            <h1>안녕하세요</h1>
            <div className='sticky-elem main-message' ref={messageA}>
                <p>간단하면서 사용자 친화적인<br/>디자인을 추구하며 </p>
            </div>
            <div className='sticky-elem main-message' ref={messageB}>
                <p>항상 배우는 자세, 낮은 자세로<br/>다가가겠습니다 </p>
            </div>
            <div className='sticky-elem main-message' ref={messageC}>
                <p>"성장하는 프론트엔드 개발자"<br/>권익주 입니다.</p>
            </div>
            <canvas className="image-blend-canvas" width='1920' height='1080' ref={canvas}> 
            </canvas>
        </div>
    )
}

export default React.memo(ScrollSection1);