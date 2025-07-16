import "./globals.css";




export const metadata = {
  title: "Finder | Blood & Plasma Donor Finder in Bangladesh",
  description:
    "Finder helps you easily locate blood and plasma donors across Bangladesh. Connect with verified donors in your area and save lives with a simple search.",
  keywords:
    "Blood Donation Bangladesh, Plasma Donor, Blood Finder, Blood Donor App, Blood Bank, Donate Blood, Blood Search, Emergency Blood, Finder Project",
  authors: [
    {
      name: "Muhammad Wasim Uddin Omar",
      url: "https://wasim-uddin-portfolio.vercel.app/",
    },
  ],
  openGraph: {
    title: "Finder | Blood & Plasma Donor Finder in Bangladesh",
    description:
      "Easily find blood and plasma donors near you with Finder. A reliable and user-friendly platform to save lives across Bangladesh.",
    url: "https://finder-bd.vercel.app/",
    siteName: "Finder",
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@finderbd",
    title: "Finder | Blood & Plasma Donor Finder in Bangladesh",
    description:
      "Finder is a simple and powerful tool to search blood and plasma donors in Bangladesh. Join and save lives today.",
  },
};

export function generateViewportMetadata() {
  return {
    viewport: "width=device-width, initial-scale=1",
  };
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {children}
        
      </body>
    </html>
  );
}
