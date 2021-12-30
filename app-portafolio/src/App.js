import './App.css';
import InitialPage from './Pages/InitialPage';
import AboutMe from './Pages/AboutMe';
import MySkills from './Pages/MySkills';
import { Header } from './Components';
import { Footer } from './Components';

function App() {
  return (
    <div className="App">
      <Header />
      <InitialPage />
      <AboutMe />
      <MySkills />
      <Footer />
    </div>
  );
}
  
export default App;
