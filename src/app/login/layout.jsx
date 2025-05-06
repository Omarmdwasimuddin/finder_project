import React from 'react';


export const generateMetadata = () => {
    return {
        title: "Login",
        description: "Login to your account.",
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