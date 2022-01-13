import React, { useEffect, useRef } from 'react';
import SceneInfo from '../../SceneInfo';
import { calcValues } from '../../funcs/funcs';

const LargeTileItem = ({ value, titleTiming, contentTiming }) => {

    const titleRef = useRef();
    const contentRef = useRef();

    const scrollEventListener = () => {
        const titleRef_current = titleRef.current;
        const contentRef_current = contentRef.current;
        playAnimation(titleRef_current, contentRef_current);
    }

    const playAnimation = (titleRef_current, contentRef_current) => {
        const values = SceneInfo[1].values;
        const currentYOffset = window.pageYOffset;
        const scrollHeight = SceneInfo[1].scrollHeight;
        // const scrollRatio = currentYOffset / scrollHeight;

        titleRef_current.style.opacity = calcValues(values.large_title_opacity_out, currentYOffset, 1);
        contentRef_current.style.opacity = calcValues(values.large_content_opacity_in, currentYOffset, 1);
    }

    useEffect(()=>{
        
        window.addEventListener('scroll', scrollEventListener);

        return(()=> {
            window.removeEventListener('scroll', scrollEventListener);
        })
    })

    return(
        <>
            <div className="large-tile-container tile-container">
                <div className="large-tile-title tile-title" ref={titleRef}>
                    <h1>{value.title}</h1>
                </div>
                <div className="large-tile-content" ref={contentRef}>
                    <pre>{value.content}</pre>   
                </div>
            </div>
        </>
    )
}

export default LargeTileItem;