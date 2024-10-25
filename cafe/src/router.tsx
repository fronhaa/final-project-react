import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Entrega } from "./pages/Entrega";


export function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entrega" element={<Entrega />} />
    </Routes>
  );
}
