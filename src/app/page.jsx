'use client';
import Stats from '../Component/Stats';
import HeroSection from '../Component/HeroSection';
import PlainLayout from '@/Component/Plain-Layout';
import DonorSection from '@/Component/DonorSection';
import DonationInfoSection from '@/Component/DonationInfoSection';
import TestimonialSection from '@/Component/TestimonialSection';



export default function HomePage() {
  return (
    <PlainLayout>
      <HeroSection/>
      <DonorSection/>
      <Stats/>
      <DonationInfoSection />
      <TestimonialSection />
    </PlainLayout>
  );
}