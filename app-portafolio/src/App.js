import { Switch } from 'react-router-dom';
import InitialPage from './Pages/InitialPage';
import PageTwo from './Pages/PageTwo';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
    <Route exact path="/" component={ InitialPage } />;
    <Route path="/pagetwo" component={ PageTwo } />;
    </Switch>
  );
}

export default App;
