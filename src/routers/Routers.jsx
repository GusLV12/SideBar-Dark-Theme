import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Productos } from '../pages/Productos';
import { Estadisticas } from '../pages/Estadisticas';
import { Sidebar } from '../components/Sidebar';

export const RoutersApp = () => {
  return (
    <Routes>
      <Route element={<Sidebar />}>
        <Route path="/home" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
      </Route>
    </Routes>
  );
};
