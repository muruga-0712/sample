
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import ProductDetails from './components/productDetails/productDetails';
//import { ProductList } from './components/Products/Productlist';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          {/* <Route index element={<Home />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          {/* <Route path="*" element={<NoPage />} /> */}
       
      </Routes>
    </BrowserRouter>
    // <div>
    //   <Signin />
    //   <Signup />
    // </div>
    // <Home />
    // <ProductList />

  );
}

export default App;
