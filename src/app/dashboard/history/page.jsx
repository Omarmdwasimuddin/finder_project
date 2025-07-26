"use client";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function DonationHistoryPage() {
  const [form, setForm] = useState({
    patientName: "",
    hospitalName: "",
    donationDate: "",
    note: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/donationHistory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await res.json();
    if (result.status === "success") {
      toast.success("Donation History Added!");
      setForm({
        patientName: "",
        hospitalName: "",
        donationDate: "",
        note: "",
      });
    } else {
      toast.error("Failed to add!");
    }
  };

  return (
    <div className="ml-64 p-8 min-h-screen bg-gray-100">
      <Toaster />
      <h1 className="text-2xl font-bold mb-6">Add Donation History</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          value={form.patientName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="hospitalName"
          placeholder="Hospital Name"
          value={form.hospitalName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="date"
          name="donationDate"
          value={form.donationDate}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          name="note"
          placeholder="Optional Note"
          value={form.note}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
