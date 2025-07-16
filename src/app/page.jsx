'use client';
import Stats from '../Component/Stats';
import WorkSection from '../Component/WorkSection';
import HeroSection from '../Component/HeroSection';
import SectionWrapper from '../Component/SectionWrapper';
import PlainLayout from '@/Component/Plain-Layout';




export default function HomePage() {
  return (
    <PlainLayout>
      {/* Hero Section */}
      <HeroSection/>

      {/* Stats Section */}
      <Stats/>

      {/* How It Works */}
      <WorkSection/>

      {/* Emergency Section */}
      <SectionWrapper delay={0.4}>
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
      </SectionWrapper>
    </PlainLayout>
  );
}