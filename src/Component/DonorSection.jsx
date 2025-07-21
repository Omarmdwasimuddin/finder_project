'use client';

import React from 'react';

// Reusable Donation Card Component
const DonationCard = ({ title, description, buttonText, buttonLink, imageSrc }) => {
  return (
    <div className="group p-6 bg-white rounded-lg shadow-md flex flex-col h-full transition-all duration-300 hover:shadow-lg">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
      )}
      <div className="flex-1">
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      </div>
      <a
        href={buttonLink}
        className="mt-auto inline-block px-4 py-2 rounded text-red-600 font-medium transition-all duration-300 ease-in-out group-hover:bg-red-600 group-hover:text-white"
      >
        ➤ {buttonText}
      </a>
    </div>
  );
};


// Special Sign-Up Card
const SignUpCard = () => {
  return (
    <div className="bg-[#fce3df] p-6 rounded-lg text-center flex flex-col h-full transition-all duration-300 hover:shadow-lg">
      <img
        src="/Img/donateIcon.png"
        alt="Become a blood donor"
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <div className="flex-1">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Become a blood donor</h3>
        <p className="text-gray-600 mb-4 text-sm md:text-base">Save up to 3 lives in 1 hour.</p>
      </div>
      <a
        href="#"
        className="inline-block bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded mt-auto text-sm md:text-base"
      >
        Sign up to give blood
      </a>
    </div>
  );
};

// Main Section Component
export default function BloodDonationSection() {
  return (
    <section className="bg-[#f9e2df] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SignUpCard />
          <DonationCard
            title="Want to donate for the first time?"
            description="Let us take you through the steps to becoming a blood donor and the process of getting that first appointment booked."
            buttonText="Your steps to donation"
            buttonLink="#"
            imageSrc="/Img/donor01.jpeg"
          />
          <DonationCard
            title="Who can give blood?"
            description="As long as you are fit and healthy, you should be able to give blood. Check if you meet the requirements to donate."
            buttonText="Discover if you're eligible"
            buttonLink="#"
            imageSrc="/Img/donor03.jpeg"
          />
          <DonationCard
            title="It's in your blood to save lives"
            description="Your blood is made up of red cells, plasma and platelets. Find out how each of these can help someone in need."
            buttonText="How your blood could help"
            buttonLink="#"
            imageSrc="/Img/donor02.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
