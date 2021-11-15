import Home from './pages/Home';
import { ShipContextProvider } from './context/ShipContext';

import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <ShipContextProvider>
        <Sidebar />
        <Home />
      </ShipContextProvider>
    </div>
  );
}

export default App;
