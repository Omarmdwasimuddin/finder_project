// app/components/StatsSection.jsx
'use client';

import { useState, useEffect } from 'react';
import { FaHeartbeat, FaUsers, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

// Mock API call function - replace with your actual API call
const fetchStats = async () => {
  // In a real app, this would be:
  // const res = await fetch('/api/stats');
  // return await res.json();
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        livesSaved: 10245,
        activeDonors: 5237,
        monthlyDonations: 584,
        districtsCovered: 64
      });
    }, 500); // Simulate network delay
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
        
        // Animate counting up
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
    const duration = 2000; // Animation duration in ms
    const frameDuration = 1000 / 60; // 60fps
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* Lives Saved */}
          <div className="p-6">
            <FaHeartbeat className="text-red-500 text-4xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-800">
              {loading ? '...' : stats.livesSaved.toLocaleString()}+
            </h3>
            <p className="text-gray-600">Lives Saved</p>
          </div>
          
          {/* Active Donors */}
          <div className="p-6">
            <FaUsers className="text-red-500 text-4xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-800">
              {loading ? '...' : stats.activeDonors.toLocaleString()}+
            </h3>
            <p className="text-gray-600">Active Donors</p>
          </div>
          
          {/* Monthly Donations */}
          <div className="p-6">
            <FaCalendarAlt className="text-red-500 text-4xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-800">
              {loading ? '...' : stats.monthlyDonations.toLocaleString()}+
            </h3>
            <p className="text-gray-600">Monthly Donations</p>
          </div>
          
          {/* Districts Covered */}
          <div className="p-6">
            <FaMapMarkerAlt className="text-red-500 text-4xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-800">
              {loading ? '...' : stats.districtsCovered}
            </h3>
            <p className="text-gray-600">Districts Covered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;













/*


import React from 'react';
import {  FaHeartbeat, FaUsers, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
const Stats = () => {
    return (
        <div>
            
            
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <FaHeartbeat className="text-red-500 text-4xl mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800">10,000+</h3>
              <p className="text-gray-600">Lives Saved</p>
            </div>
            <div className="p-6">
              <FaUsers className="text-red-500 text-4xl mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800">5,000+</h3>
              <p className="text-gray-600">Active Donors</p>
            </div>
            <div className="p-6">
              <FaCalendarAlt className="text-red-500 text-4xl mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800">500+</h3>
              <p className="text-gray-600">Monthly Donations</p>
            </div>
            <div className="p-6">
              <FaMapMarkerAlt className="text-red-500 text-4xl mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800">64</h3>
              <p className="text-gray-600">Districts Covered</p>
            </div>
          </div>
        </div>
      </section>

        </div>
    );
};

export default Stats;
*/