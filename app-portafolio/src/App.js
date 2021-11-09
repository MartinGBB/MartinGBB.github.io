import { BrowserRouter } from 'react-router-dom';
import InitialPage from './Pages/InitialPage';
import PageTwo from './Pages/PageTwo';
import { Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" component={ InitialPage } />;
    <Route path="/pagetwo" component={ PageTwo } />;
    </BrowserRouter>
  );
}

export default App;
