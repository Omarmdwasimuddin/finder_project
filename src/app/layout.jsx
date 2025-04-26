import "./globals.css";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";



export const metadata = {
  title: 'LifeSaver - Blood Donation Network',
  description: 'Connect with blood donors and save lives in Bangladesh',
  openGraph: {
    images: '/opengraph-image.jpg',
  },
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
