import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GodContainer from './container/GodContainer'

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path="/" exact component={GodContainer} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
