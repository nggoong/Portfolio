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

    let imgElem;


    //forwardRef()를 사용하여 ref를 props로 전달 할 수 있는 방법을 추후 고려
    useEffect(()=> {
        // setCanvasImages();
        if(!canvas) return;
        const context = canvas.current.getContext('2d');
        imgElem = new Image();
        imgElem.src = '../../images/blend-image-2.jpg';
        imgElem.onload = function() {
            context.drawImage(imgElem, 0, 0);
        }
        setLayout(0, container);

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

    

    const setCanvasImages = () => {
        const context = canvas.current.getContext('2d');
        imgElem = new Image();
        imgElem.src = '../../images/blend-image-2.jpg';
        imgElem.onload = function() {
            // context.fillStyle = 'black';
            context.drawImage(imgElem, 0, 0);
        }
        // for(let i = 0; i<SceneInfo[0].values.imagePath.length; i++) {
        //     imgElem = new Image();
        //     imgElem.src = SceneInfo[0].values.imagePath[i];
        //     SceneInfo[0].values.images.push(imgElem);
        // }
    }

    const playAnimation = (index) => {
        const values = SceneInfo[index].values;
        const currentYOffset = window.pageYOffset;
        const scrollHeight = SceneInfo[index].scrollHeight;
        const scrollRatio = currentYOffset / scrollHeight;
        const widthRatio = window.innerHeight / canvas.current.width;
        const heightRatio = window.innerHeight / canvas.current.height;
        const context = canvas.current.getContext('2d');
        let canvasScaleRatio;

        if(widthRatio <= heightRatio) {
            // 길이가 긴 부분을 ratio로 잡아야 다른 부분이 잘리지 않음
            canvasScaleRatio = heightRatio;
            console.log(heightRatio);
        }

        else if(heightRatio < widthRatio) {
            canvasScaleRatio = widthRatio;
            console.log(widthRatio);
        }
        console.log(canvas);

        canvas.current.style.transform = `scale(${canvasScaleRatio})`;
        // context.fillStyle = 'black';
        // context.drawImage(imgElem, 0, 0);

       

        switch(index) {
            case 0:

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

				break;
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