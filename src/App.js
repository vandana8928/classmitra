
import Service from './component/service';
import Blog from './component/blog';
import About from './component/about';
import Contact from './component/contact';
import Information from './component/information';
import Content from './component/content';
import Home from './component/home';
import Login from './component/login';

import './style.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return ( 
    <BrowserRouter>
     
      <Routes>
          <Route exact path="/" element={<Home />}/> 
          <Route path="/about" element={<About />}/>        
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/content" element={<Content />} />
          <Route path="/login" element={<Login />} />
          <Route path="/information" element={<Information/>} />
          
        
      </Routes>
      
    </BrowserRouter>
     
    
  );
}

export default App;
