import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GodContainer from './container/GodContainer'
import GodForm from './components/GodComponents/GodForm'
import HeroForm from './components/HeroComponents/HeroForm'
import HeroContainer from './container/HeroContainer';
import HomeContainer from './container/HomeContainer'
import LocationContainer from './container/LocationContainer';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
        <Route path="/" exact component={HomeContainer} />  
         <Route path="/gods" exact component={GodContainer} />
         <Route path="/godform"  exact component={GodForm} />
         <Route path="/heroform"  exact component={HeroForm} />
         <Route path="/heroes" exact component={HeroContainer} />
         <Route path="/locations" exact component={LocationContainer} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
