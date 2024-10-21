import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Productos } from '../pages/Productos';
import { Estadisticas } from '../pages/Estadisticas';

export const RoutersApp = () => {
  return (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
    </Routes>
  );
};
