import './App.css';
import { Cake } from './pages/cake/Cake';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="cake" element={<Cake />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
