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



export { setLayout };

