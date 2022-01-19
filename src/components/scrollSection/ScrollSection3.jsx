import React, { useEffect } from 'react';

const ScrollSection3 = () => {

    useEffect(()=> {
        document.querySelector('body').style.overflowY='hidden';

        return(()=> {
            document.querySelector('body').style.overflowY='visible';
        })
    }, [])

    return(
        <>
        <div id="scroll-section-3">
            sdfffffffffffffff
        </div>
        </>

    )
}

export default ScrollSection3;