import './App.css'

import { Outlet } from 'react-router-dom';
import Navbar from './components/main/Navbar';
import Search from './components/main/Search';
import Footer from './components/main/Footer';


function App() {

  return (
    <>
        <Navbar />
        <Search />
        <Outlet />
        <Footer />
    </>
  )
}

export default App
