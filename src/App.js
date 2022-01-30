import './App.css';
import Header from './components/Header/Header';
import ScrollSection1 from './components/scrollSection/ScrollSection1';
import ScrollSection2 from './components/scrollSection/ScrollSection2';
import ScrollSection3 from './components/scrollSection/ScrollSection3';
import ScrollSection4 from './components/scrollSection/ScrollSection4';
import ScrollSection5 from './components/scrollSection/ScrollSection5';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Route, Redirect, useHistory, useLocation} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import SceneInfo from './SceneInfo';

function App() {
  const [routeIndex, setRouteIndex] = useState(0);
  const [routes, setRoutes] = useState([
    {path:'/', name:'ScrollSection1', Component: ScrollSection1},
    {path:'/introduction', name:'ScrollSection2', Component: ScrollSection2},
    {path:'/skills', name:'ScrollSection3', Component: ScrollSection3},
    {path:'/projects', name:'ScrollSection4', Component: ScrollSection4},
    {path:'/contact', name:'ScrollSection5', Component: ScrollSection5}
  ])

  const path=[
    '/', '/introduction', '/skills', 'projects', '/contact'
  ]

  const [isrender, setRender]= useState(false);

  // const [scrollValue, setScrollValue] = useState(0);
  let scrollValue = 0;

  let history = useHistory();
  let location = useLocation();

  const scrollDebounce = (callback, delay) => {
    let timer;
    return (()=>{
      if(timer) clearTimeout(timer);
      timer = setTimeout(callback(), delay);
    })
  }

  const mouseWheelEventListener = (e) => {
    let index;
    // let scrollref = scrollValue3.current;
    if(routeIndex === 0) {
      if(scrollValue + (window.innerHeight/2) >= SceneInfo[0].scrollHeight && e.deltaY > 0) {
        index = 1;
      }
      else return;
    }
    else if(routeIndex === 1) {
      if(scrollValue >= SceneInfo[1].scrollHeight && e.deltaY>0) {
        index = 2;
      }
      else if(scrollValue === 0 && e.deltaY < 0) {
        index = 0;
      }
    }
    else if(routeIndex === 2) {
      if(e.deltaY > 0) {
        index = 3;
      }
      else if(e.deltaY < 0) {
        index = 1;
      }
    }
    else if(routeIndex === 3) {
      if(e.deltaY > 0) {
        index = 4;
      }
      else if(e.deltaY < 0) {
        index = 2;
      }
    }
    else if(routeIndex === 4) {
      if(e.deltaY > 0) return;
      else if(e.deltaY < 0) index = 3;
    }
    // scrollDebounce(changeRouteIndex(index), 500)
    changeRouteIndex(index)
  }

  const scrollThrottle = (callback, delay) => {
    let stimer;
    console.log('scroll throttle')

    return(()=> {
      if(stimer) return;
      stimer = setTimeout(()=>{
        callback();
      }, delay);
    })
  }


  const scrollEventListener = () => {
    console.log('scrollevent');
    // let currentScroll = window.pageYOffset;
    // scrollValue = currentScroll;
    // console.log(scrollValue);
  }

  

  useEffect(()=>{
    // const updateScroll = () =>{
    //   window.addEventListener('wheel', scrollThrottle(()=>{console.log('mouse')},1000));
    //   // window.addEventListener('scroll', scrollEventListener);
    // }
    window.addEventListener('wheel', scrollThrottle(scrollEventListener, 1000));
    // updateScroll();
  })

  useEffect(()=> {
    console.log('route 변경')
    // history.push(routes[routeIndex].path);
    history.push(path[routeIndex]);
  },[routeIndex, history]);


  const changeRouteIndex = (index) => {
    console.log('router change');
    // scrollDebounce(setRouteIndex(index), 5000);
    setRouteIndex(index);
    // window.__scrollPosition = 0;
  }

  return (
    <>
      <Header/>
      {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={1000}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component changeRouteIndex={changeRouteIndex}/>
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
           <Route render={()=><Redirect to='/'/>}/>
    </>
  );
}

export default App;
