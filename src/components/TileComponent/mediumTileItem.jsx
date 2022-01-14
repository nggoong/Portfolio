import React, { useEffect, useRef } from 'react';
import { calcValues } from '../../funcs/funcs';
import SceneInfo from '../../SceneInfo';

const MediumTileItem = ({ value }) => {

   const mediumTileContainer = useRef();
   const playAnimation = (current) => {
        const values = SceneInfo[1].values;
        const currentYOffset = window.pageYOffset;
        const scrollHeight = SceneInfo[1].scrollHeight;

        current.style.transform = `translate3d(0, ${calcValues(values.medium_tile_wrapper_translateY, currentYOffset, 1)}%, 0)`;

   }

   const scrollEventListener = () => {
       const current = mediumTileContainer.current;
       playAnimation(current)
   }

   useEffect(()=> {
       window.addEventListener('scroll', scrollEventListener);
       
       return(()=> {
           window.removeEventListener('scroll', scrollEventListener);
       })
   })



    return(
        <>
            <div className="medium-tile-container tile-container"ref={mediumTileContainer}>
                <div className="medium-tile-title tile-title">
                    <h1>{value.title}</h1>
                </div>
                <div className="medium-tile-content tile-content">
                    <pre>{value.content}</pre>   
                </div>
            </div>
        </>
    )
}

export default MediumTileItem;