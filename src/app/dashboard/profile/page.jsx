"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const [donor, setDonor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("details"); // details | update
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    bloodGroup: "",
    district: "",
    upazila: "",
    city: "",
    password: "",
  });
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await axios.get("/api/profile/details");
        if (res.data.status === "success") {
          const data = res.data.data;
          setDonor(data);
          setFormData({
            name: data.name || "",
            phone: data.phone || "",
            bloodGroup: data.bloodGroup || "",
            district: data.district || "",
            upazila: data.upazila || "",
            city: data.city || "",
            password: "",
          });
        } else {
          toast.error(res.data.message || "Failed to load profile");
        }
      } catch {
        toast.error("Failed to load profile");
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleUpdate(e) {
    e.preventDefault();
    setUpdating(true);

    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        bloodGroup: formData.bloodGroup,
        district: formData.district,
        upazila: formData.upazila,
        city: formData.city,
      };
      if (formData.password.trim() !== "") {
        payload.password = formData.password;
      }
      const res = await axios.post("/api/profile/update", payload);
      if (res.data.status === "success") {
        toast.success("Profile updated successfully");
        setDonor(res.data.data);
        setFormData((prev) => ({ ...prev, password: "" }));
        setView("details");
      } else {
        toast.error(res.data.data || "Update failed");
      }
    } catch (error) {
      toast.error(error.message || "Update failed");
    } finally {
      setUpdating(false);
    }
  }

  async function handleDelete() {
    if (!confirm("Are you sure? This will permanently delete your profile.")) return;
    setDeleting(true);
    try {
      const res = await axios.delete("/api/profile/delete", { data: { id: donor.id } });
      if (res.data.status === "success") {
        toast.success("Profile deleted. Redirecting...");
        setTimeout(() => {
          window.location.href = "/user/login";
        }, 2000);
      } else {
        toast.error(res.data.data || "Delete failed");
      }
    } catch (error) {
      toast.error(error.message || "Delete failed");
    } finally {
      setDeleting(false);
    }
  }

  if (loading) return <p className="text-center mt-10">Loading profile...</p>;
  if (!donor) return <p className="text-center mt-10 text-red-600">Profile not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow space-y-6">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      {/* Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setView("details")}
          className={`px-4 py-2 rounded ${
            view === "details" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Profile Details
        </button>
        <button
          onClick={() => setView("update")}
          className={`px-4 py-2 rounded ${
            view === "update" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Profile Update
        </button>
        <button
          onClick={handleDelete}
          disabled={deleting}
          className={`px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 ${
            deleting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {deleting ? "Deleting..." : "Profile Delete"}
        </button>
      </div>

      {/* View Content */}
      {view === "details" && (
        <div className="space-y-3">
          <p><strong>Name:</strong> {donor.name}</p>
          <p><strong>Email:</strong> {donor.email}</p>
          <p><strong>Phone:</strong> {donor.phone}</p>
          <p><strong>Blood Group:</strong> {donor.bloodGroup}</p>
          <p><strong>Location:</strong> {donor.upazila}, {donor.district}, {donor.city}</p>
        </div>
      )}

      {view === "update" && (
        <form onSubmit={handleUpdate} className="space-y-4 max-w-md">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Phone</label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$"
              title="Valid Bangladeshi phone number"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Blood Group</label>
            <input
              name="bloodGroup"
              type="text"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">District</label>
            <input
              name="district"
              type="text"
              value={formData.district}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Upazila</label>
            <input
              name="upazila"
              type="text"
              value={formData.upazila}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">City</label>
            <input
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Password <span className="text-sm text-gray-500">(Leave blank to keep current)</span>
            </label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="New password"
              className="w-full border border-gray-300 rounded px-3 py-2"
              minLength={6}
            />
          </div>

          <button
            type="submit"
            disabled={updating}
            className={`w-full py-2 rounded text-white font-semibold ${
              updating ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {updating ? "Updating..." : "Update Profile"}
          </button>
        </form>
      )}
    </div>
  );
}
