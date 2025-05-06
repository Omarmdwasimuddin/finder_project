import React from 'react';


export const generateMetadata = () => {
    return {
        title: "Our Concern",
        description: "Learn more about our concerns and initiatives.",
    };
};



const Layout = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;