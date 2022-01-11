import './App.css';
import Header from './components/Header/Header';
import ScrollSection1 from './components/scrollSection/ScrollSection1';
import ScrollSection2 from './components/scrollSection/ScrollSection2';
import ScrollSection3 from './components/scrollSection/ScrollSection3';
import ScrollSection4 from './components/scrollSection/ScrollSection4';
import ScrollSection5 from './components/scrollSection/ScrollSection5';
import { BrowserRouter, Switch, Route, Redirect, useHistory, useParams} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header></Header>
      <Switch>
        <Route exact path="/" component={ScrollSection1}/>
        <Route path="/about-me" component={ScrollSection2}/>
        <Route path="/skills" component={ScrollSection3}/>
        <Route path="/projects" component={ScrollSection4}/>
        <Route path="/contact" component={ScrollSection5}/>
        <Route render={()=><Redirect to='/'/>}/>
      </Switch>
    </BrowserRouter>
      
    </>
  );
}

export default App;
