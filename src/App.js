
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Create from "./pages/craete/Create";

import Product from "./pages/Product"
import Edit from "./pages/edit/Edit";
import Favourite from "./pages/favourite/Favourite";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/admin/products" element={<Product />} />
      <Route path="/admin/create" element={<Create />} />
      <Route path="/admin/edit/:id" element={<Edit />} />
      <Route path="/admin/favourite" element={<Favourite />} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
