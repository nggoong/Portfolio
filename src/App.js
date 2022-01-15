import './App.css';
import Header from './components/Header/Header';
import ScrollSection1 from './components/scrollSection/ScrollSection1';
import ScrollSection2 from './components/scrollSection/ScrollSection2';
import ScrollSection3 from './components/scrollSection/ScrollSection3';
import ScrollSection4 from './components/scrollSection/ScrollSection4';
import ScrollSection5 from './components/scrollSection/ScrollSection5';
import { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory} from 'react-router-dom';
import SceneInfo from './SceneInfo';




function App() {
  
  const [routeIndex, setRouteIndex] = useState(0);
  const routeList = ['/', "/about-me", '/skills', '/projects', '/contact'];
  let history = useHistory();

  useEffect(()=> {
    history.push(routeList[routeIndex]);
  },[routeIndex]);

  const changeRouteIndex = (index) => {
    console.log('router change');
    setRouteIndex(index);
  }

  return (
    <>
    {/* <BrowserRouter> */}
    <Header></Header>
      <Switch>
        <Route exact path="/" render={() => <ScrollSection1 changeRouteIndex={changeRouteIndex}/>} />
        <Route path="/about-me" component={ScrollSection2} changeRouteIndex={changeRouteIndex}/>
        <Route path="/skills" component={ScrollSection3} changeRouteIndex={changeRouteIndex}/>
        <Route path="/projects" component={ScrollSection4} changeRouteIndex={changeRouteIndex}/>
        <Route path="/contact" component={ScrollSection5} changeRouteIndex={changeRouteIndex}/>
        <Route render={()=><Redirect to='/'/>}/>
      </Switch>
    {/* </BrowserRouter> */}
      
    </>
  );
}

export default App;
