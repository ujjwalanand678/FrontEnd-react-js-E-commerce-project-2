import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from "./Components/Banner";
import Products from './Components/Products';
import Footer from './Components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Banner />
      <Products />

      <Footer />
    </>
  );
}

export default App
