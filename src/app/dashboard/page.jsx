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

  if (loading) return <p className="text-center mt-10">Loading Dashboard...</p>;

  if (!donor)
    return (
      <p className="text-center mt-10 text-red-600">
        Could not load donor information. Please login again.
      </p>
    );

  const nextEligibleDate = donor.lastDonationDate
    ? new Date(new Date(donor.lastDonationDate).getTime() + 90 * 24 * 60 * 60 * 1000).toLocaleDateString()
    : "Not donated yet";

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      {/* Welcome */}
      <h1 className="text-3xl font-bold">Welcome back, {donor.name}! 👋</h1>

      {/* Profile Overview */}
      <section className="bg-white p-6 rounded-lg shadow-md space-y-2">
        <h2 className="text-2xl font-semibold">Profile Overview</h2>
        <p><strong>Blood Group:</strong> {donor.bloodGroup}</p>
        <p><strong>Phone:</strong> {donor.phone}</p>
        <p>
          <strong>Location:</strong> {donor.upazila}, {donor.district}, {donor.city}
        </p>
        <p><strong>Available for Donation:</strong> {donor.available ? "Yes" : "No"}</p>
      </section>

        <h2 className="text-2xl font-semibold mb-4">Previous Donation Records</h2>

        <p className="mb-4">
          <strong>Total Donations:</strong> {donor.totalDonations || donationDates.length}
        </p>

        {donationDates.length > 0 ? (
          donationDates.map((entry, index) => {
            const donationDate = new Date(entry.donationDate);
            const nextEligible = new Date(donationDate.getTime() + 90 * 24 * 60 * 60 * 1000);
            return (
              <div key={index} className="border p-4 rounded-lg shadow-sm mb-4 space-y-1">
                <p><strong>Patient Name:</strong> {entry.patientName}</p>
                <p><strong>Donated Hospital Name:</strong> {entry.hospitalName}</p>
                <p><strong>Donation Date:</strong> {donationDate.toLocaleDateString()}</p>
                <p><strong>Next Eligible Date:</strong> {nextEligible.toLocaleDateString()}</p>
              </div>
            );
          })
        ) : (
          <p>No donation history available.</p>
        )}


      {/* Logout Button */}
      <div className="text-center">
        <button
          onClick={async () => {
            await axios.get("/api/logout");
            window.location.href = "/";
          }}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
