import React from 'react'
import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Collections from './Component/Collections';

export const Collection = () => {
  return (
    <div>
        <Navbar/>
        <Collections/>
        <Footer/>
    </div>
  )
}
