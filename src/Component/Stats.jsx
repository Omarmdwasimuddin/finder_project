'use client';

import { useState, useEffect } from 'react';
import { FaHeartbeat, FaUsers, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import LiveDonorTicker from '@/Component/LiveDonorTicker';
import ImpactInNumbers from '@/Component/ImpactInNumbers';

const fetchStats = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        livesSaved: 10245,
        activeDonors: 5237,
        monthlyDonations: 584,
        districtsCovered: 64
      });
    }, 500);
  });
};

const StatsSection = () => {
  const [stats, setStats] = useState({
    livesSaved: 0,
    activeDonors: 0,
    monthlyDonations: 0,
    districtsCovered: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchStats();
        setStats(data);
        animateNumbers(data);
      } catch (error) {
        console.error('Failed to load stats:', error);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  const animateNumbers = (targetStats) => {
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);

    Object.keys(targetStats).forEach(key => {
      const target = targetStats[key];
      const start = 0;
      const increment = (target - start) / totalFrames;

      let current = start;
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        current = Math.min(current + increment, target);

        setStats(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));

        if (frame === totalFrames) {
          clearInterval(counter);
          setStats(prev => ({
            ...prev,
            [key]: target
          }));
        }
      }, frameDuration);
    });
  };

  return (
    <section className="py-16 bg-red-100">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-gray-800">Our Impact in Numbers</h2>
          <p className="text-gray-600 text-sm mt-2">See how your donations make a difference</p>
        </div>

        {/* Connecting Border */}
        <div className="w-24 h-1 bg-red-500 mx-auto mb-10 rounded"></div>

        <ImpactInNumbers/>
        <LiveDonorTicker />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-5">
          {/* Lives Saved */}
          <div className="p-4 border border-red-200 rounded-md bg-white shadow-sm">
            <FaHeartbeat className="text-red-500 text-3xl mx-auto mb-3" />
            <h3 className="text-2xl font-semibold text-gray-800">
              {loading ? '...' : stats.livesSaved.toLocaleString()}+
            </h3>
            <p className="text-sm text-gray-600">Lives Saved</p>
          </div>

          {/* Active Donors */}
          <div className="p-4 border border-red-200 rounded-md bg-white shadow-sm">
            <FaUsers className="text-red-500 text-3xl mx-auto mb-3" />
            <h3 className="text-2xl font-semibold text-gray-800">
              {loading ? '...' : stats.activeDonors.toLocaleString()}+
            </h3>
            <p className="text-sm text-gray-600">Active Donors</p>
          </div>

          {/* Monthly Donations */}
          <div className="p-4 border border-red-200 rounded-md bg-white shadow-sm">
            <FaCalendarAlt className="text-red-500 text-3xl mx-auto mb-3" />
            <h3 className="text-2xl font-semibold text-gray-800">
              {loading ? '...' : stats.monthlyDonations.toLocaleString()}+
            </h3>
            <p className="text-sm text-gray-600">Monthly Donations</p>
          </div>

          {/* Districts Covered */}
          <div className="p-4 border border-red-200 rounded-md bg-white shadow-sm">
            <FaMapMarkerAlt className="text-red-500 text-3xl mx-auto mb-3" />
            <h3 className="text-2xl font-semibold text-gray-800">
              {loading ? '...' : stats.districtsCovered}
            </h3>
            <p className="text-sm text-gray-600">Districts Covered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
