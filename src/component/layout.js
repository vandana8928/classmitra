import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* This will render the child routes */}
      </main>
      <Footer />
      
    </div>
  )
}

export default layout
