'use client';
import DonationInfoCard from './DonationInfoCard';
import {
  Droplet,
  HeartHandshake,
  Hospital,
  Users,
} from 'lucide-react';

export default function DonationInfoSection() {
  const cardData = [
    {
      icon: Droplet,
      title: 'Why Donate Blood?',
      description: 'Every drop saves a life. Join the noble cause and help others in need.',
    },
    {
      icon: HeartHandshake,
      title: 'Who Can Donate?',
      description: 'Healthy individuals aged 18-60 with no major health issues.',
    },
    {
      icon: Hospital,
      title: 'Where to Donate?',
      description: 'Nearby hospitals, blood banks, and donation camps near you.',
    },
    {
      icon: Users,
      title: 'Become a Donor',
      description: 'Register and become a hero by helping people in emergencies.',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-red-50 via-red-100 to-red-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-red-700 mb-10">Donation Info</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {cardData.map((card, idx) => (
            <DonationInfoCard
              key={idx}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
