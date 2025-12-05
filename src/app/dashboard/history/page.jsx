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
    <div className="md:ml-64 px-4 py-4 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        <Toaster />
        <h1 className="text-2xl font-bold mb-4">Add Donation History</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded shadow-sm"
        >
          <div className="space-y-4">
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
              rows="3"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}