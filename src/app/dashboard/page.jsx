"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [donor, setDonor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [donationDates, setDonationDates] = useState([]);

  useEffect(() => {
    const fetchDonor = async () => {
      try {
        const res = await axios.get("/api/profile/details");
        if (res.data.status === "success") {
          setDonor(res.data.data);
        } else {
          console.error("Failed to fetch donor data:", res.data.message);
        }
      } catch (error) {
        console.error("Error fetching donor profile:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchDonationHistory = async () => {
      try {
        const res = await axios.get("/api/donationHistory");
        if (res.data.status === "success") {
          setDonationDates(res.data.data);
        } else {
          console.error("Failed to fetch donation history:", res.data.message);
        }
      } catch (error) {
        console.error("Error fetching donation history:", error);
      }
    };

    fetchDonor();
    fetchDonationHistory();
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-lg">Loading Dashboard...</p>;
  }

  if (!donor) {
    return (
      <p className="text-center mt-10 text-red-600 text-lg">
        Could not load donor information. Please login again.
      </p>
    );
  }

  const nextEligibleDate = donor.lastDonationDate
    ? new Date(
        new Date(donor.lastDonationDate).getTime() + 90 * 24 * 60 * 60 * 1000
      ).toLocaleDateString()
    : "Not donated yet";

  return (
    <div className="px-4 py-6 sm:p-6 max-w-6xl mx-auto space-y-6">
      {/* Welcome */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
        Welcome back, {donor.name}! 👋
      </h1>

      {/* Profile Overview */}
      <section className="bg-white p-4 sm:p-6 rounded-lg shadow-md space-y-2 text-sm sm:text-base">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          Profile Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
          <p><strong>Blood Group:</strong> {donor.bloodGroup}</p>
          <p><strong>Phone:</strong> {donor.phone}</p>
          <p>
            <strong>Location:</strong> {donor.upazila}, {donor.district}, {donor.city}
          </p>
          <p><strong>Available for Donation:</strong> {donor.available ? "Yes" : "No"}</p>
          <p><strong>Next Eligible Date:</strong> {nextEligibleDate}</p>
        </div>
      </section>

      {/* Donation History */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Donation Records</h2>
        <p className="text-sm sm:text-base">
          <strong>Total Donations:</strong> {donor.totalDonations || donationDates.length}
        </p>

        {donationDates.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {donationDates.map((entry, index) => {
              const donationDate = new Date(entry.donationDate);
              const nextEligible = new Date(
                donationDate.getTime() + 90 * 24 * 60 * 60 * 1000
              );

              return (
                <div
                  key={index}
                  className="border p-4 rounded-lg shadow-sm bg-white space-y-1 text-sm sm:text-base"
                >
                  <p><strong>Patient:</strong> {entry.patientName}</p>
                  <p><strong>Hospital:</strong> {entry.hospitalName}</p>
                  <p><strong>Date:</strong> {donationDate.toLocaleDateString()}</p>
                  <p><strong>Next Eligible:</strong> {nextEligible.toLocaleDateString()}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-sm text-gray-600">No donation history available.</p>
        )}
      </section>

      {/* Logout */}
      <div className="text-center pt-4">
        <button
          onClick={async () => {
            await axios.get("/api/logout");
            window.location.href = "/";
          }}
          className="px-6 py-2 sm:py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
