import './App.css';
import { Cake } from './pages/cake/Cake';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Icecream } from './pages/icecream/Icecream';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="cake" element={<Cake />} />
            <Route path="icecream" element={<Icecream />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
