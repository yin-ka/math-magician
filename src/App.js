import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Quote from './pages/Quote';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
