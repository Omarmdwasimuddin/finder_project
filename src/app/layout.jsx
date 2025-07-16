import "./globals.css";




export const generateMetadata = () => {
    return {
        title: "Home",
        description: "This is the home page of the application."
    };
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        {children}
        
      </body>
    </html>
  );
}
