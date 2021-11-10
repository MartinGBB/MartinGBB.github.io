import { Switch } from 'react-router-dom';
import InitialPage from './Pages/InitialPage';
import AboutMe from './Pages/AboutMe';
import { Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

import './App.css';

function App() {
  return (
    <Switch>
      <div className="App">
        <Header />
        <Route exact path="/" component={ InitialPage } />
        <AboutMe />
        <Footer />
    {/* <Route path="/:id" component={ AboutMe } />; */}
      </div>
    </Switch>
  );
}
  
export default App;
