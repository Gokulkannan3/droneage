import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import AllRoutes from './Routes'
import { Provider } from "react-redux"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <AllRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
