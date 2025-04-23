import Stats from './Component/Stats/Stats';
import WorkSection from './Component/WorkSection/WorkSection';
import HeroSection from './Component/HeroSection/HeroSection';


export const metadata = {
  title: 'LifeSaver - Blood Donation Network',
  description: 'Connect with blood donors and save lives in Bangladesh',
  openGraph: {
    images: '/opengraph-image.jpg',
  },
}

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection/>

      {/* Stats Section */}
      <Stats/>

      {/* How It Works */}
      <WorkSection/>

      {/* Emergency Section */}
      <section className="bg-red-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Blood Urgently?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our emergency response team is available 24/7 to help
          </p>
          <button className="bg-red-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition">
            Emergency Blood Request
          </button>
        </div>
      </section>
    </main>
  );
}