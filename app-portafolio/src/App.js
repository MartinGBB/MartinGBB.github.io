import { Switch } from 'react-router-dom';
import InitialPage from './Pages/InitialPage';
import AboutMe from './Pages/AboutMe';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
    <Route exact path="/" component={ InitialPage } />;
    <Route path="/aboutme" component={ AboutMe } />;
    </Switch>
  );
}
  
export default App;
