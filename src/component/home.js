import React from 'react'


import Header from './header';
import Service from './service';
import Blog from './blog';
import About from './about';
import Contact from './contact';
import Information from './information';
import Content from './content';
import Whattsapp from './Whattsapp';
import Login from './login';

import Footer from'./footer'


const home = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Whattsapp phoneNumber="89283598012" message="HI HOW ARE YOU" />
      <Service/>
      <Blog/>
      <Contact/>
      <Content/>
      <Information/>
      <Login/>

      <Footer/>

       
    </div>
  )
}

export default home
