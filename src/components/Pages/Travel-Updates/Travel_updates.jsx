import React from 'react';
import Navbar from '../../navbar/Navbar copy';
import HeadTitle from '../../navbar/HeadTitle/HeadTitle';
import AllBlog from './Blog/AllBlog';
import { navlinks } from '../../../data/travigodata';
import './travel.css'
import Year from '../Home/Sections/year';
import Footer from '../Home/Sections/Footer';

const Travel_updates = () => {
    return (
        <main>
             <Navbar navlinks={navlinks} />
             <HeadTitle />
        
             <AllBlog />   
             <Footer />
      <Year />
        </main>
    );
};

export default Travel_updates;