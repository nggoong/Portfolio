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




function App() {
  
  const [routeIndex, setRouteIndex] = useState(0);
  const [routes, setRoutes] = useState([
    {path:'/', name:'ScrollSection1', Component: ScrollSection1},
    {path:'/introduction', name:'ScrollSection2', Component: ScrollSection2},
    {path:'/skills', name:'ScrollSection3', Component: ScrollSection3},
    {path:'/projects', name:'ScrollSection4', Component: ScrollSection4},
    {path:'/contact', name:'ScrollSection5', Component: ScrollSection5}
  ])

  const [scrollValue, setScrollValue] = useState(0);

  let history = useHistory();
  let location = useLocation();

  const scrollThrottle = (callback, delay) => {
    let timer;

    return(()=> {
      if(timer) return;
      timer = setTimeout(()=>{
        callback();
      }, delay);
    })
  }

  const scrollEventListener = () => {
    const currentScroll = window.pageYOffset;
    setScrollValue(currentScroll);
  }

  useEffect(()=>{
    const updateScroll = () =>{
      window.addEventListener('scroll', scrollThrottle(scrollEventListener, 300));
      console.log(scrollValue);
    }
    updateScroll();
  })


  useEffect(()=> {
    history.push(routes[routeIndex].path);
  },[routeIndex, history, routes]);

  useEffect(()=>{
    console.log(location.pathname);
  }, [location.pathname])


  useEffect(()=> {
    console.log('hi');
  }, [])

  const changeRouteIndex = (index) => {
    console.log('router change');
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
                    <Component/>
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
