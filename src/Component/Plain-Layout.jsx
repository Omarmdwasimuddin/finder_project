import React from 'react';
import TopHeader from './TopHeader';
import MidHeader from './MidHeader';
import Navbar from './Navbar';
import Footer from './Footer';

const PlainLayout = ({ children }) => {
    return (
        <div>
            <TopHeader/>
            <MidHeader/>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default PlainLayout;