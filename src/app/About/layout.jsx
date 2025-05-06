import React from 'react';


export const generateMetadata = () => {
    return {
        title: "About",
        description: "This is the about page of the application."
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