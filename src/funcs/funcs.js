import SceneInfo from "../SceneInfo";


const setLayout = (index, container) => {
    if(SceneInfo[index].type === 'sticky') {
        SceneInfo[index].scrollHeight = SceneInfo[index].heightNum * window.innerHeight;
    }
    else if(SceneInfo[index].type === 'normal') {
        SceneInfo[index].scrollHeight = container.current.offsetHeight;
    }

    container.current.style.height =  `${SceneInfo[index].scrollHeight}px`;
}


const calcValues = (values, currentYOffset, index) => {
    let rv;
    const scrollHeight = SceneInfo[index].scrollHeight;
    let scrollRatio = currentYOffset / scrollHeight;

    if(values.length === 3) {
        const partScrollStart = values[2].start * scrollHeight;
        const partScrollEnd = values[2].end * scrollHeight;
        const partScrollHeight = partScrollEnd - partScrollStart;

        if(currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
            rv = (currentYOffset - partScrollStart) / partScrollHeight * (values[1] - values[0]) + values[0];
        }
        else if(currentYOffset < partScrollStart) {
            rv = values[0];
        }
        else if(currentYOffset > partScrollEnd) {
            rv = values[1];
        }
    }
    else if(values.length === 2) {
        rv = scrollRatio * (values[1], values[0]) + values[0];
    }

    return rv;
}



export { setLayout, calcValues };

