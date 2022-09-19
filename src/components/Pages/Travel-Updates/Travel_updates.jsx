import React from 'react';
import Navbar from '../../navbar/Navbar';
import HeadTitle from '../../navbar/HeadTitle/HeadTitle';
import AllBlog from './Blog/AllBlog';
import './travel.css'
import Footer from '../Home/Sections/Footer';

const Travel_updates = () => {
    return (
        <main>
             <Navbar />
             <HeadTitle />
             <AllBlog />   
             <Footer />      
         
        </main>
    );
};

export default Travel_updates;