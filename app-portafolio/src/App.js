import './App.css';
import InitialPage from './Pages/InitialPage';
import AboutMe from './Pages/AboutMe';
import ChangeCountry from './Pages/ChangeCountry';
import { Header } from './Components';
import { Footer } from './Components';

function App() {
  return (
    <div className="App">
      <Header />
      <InitialPage />
      <AboutMe />
      <ChangeCountry />
      <Footer />
    </div>
  );
}
  
export default App;
