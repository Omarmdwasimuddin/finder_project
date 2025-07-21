'use client';
import Stats from '../Component/Stats';
import HeroSection from '../Component/HeroSection';
import PlainLayout from '@/Component/Plain-Layout';
import DonorSection from '@/Component/DonorSection';




export default function HomePage() {
  return (
    <PlainLayout>
      {/* Hero Section */}
      <HeroSection/>
      {/* Donor Section */}
      <DonorSection/>
      {/* Stats Section */}
      <Stats/>
    </PlainLayout>
  );
}