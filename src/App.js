import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GodContainer from './container/GodContainer'
import GodForm from './components/GodComponents/GodForm'
import HeroContainer from './container/HeroContainer';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path="/" exact component={GodContainer} />
         <Route path="/form"  exact component={GodForm} />
         <Route path="/heroeshome" exact component={HeroContainer} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
