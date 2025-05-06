import "./globals.css";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";



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
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
