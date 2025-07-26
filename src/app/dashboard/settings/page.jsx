"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    bloodGroup: "",
    district: "",
    upazila: "",
    city: "",
    password: "",
  });

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("/api/profile");
        if (res.data.status === "success") {
          setFormData({
            name: res.data.data.name,
            phone: res.data.data.phone,
            bloodGroup: res.data.data.bloodGroup,
            district: res.data.data.district,
            upazila: res.data.data.upazila,
            city: res.data.data.city,
            password: "",
          });
        } else {
          toast.error("Failed to load profile");
        }
      } catch (err) {
        toast.error("Error fetching profile");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
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
        setFormData((prev) => ({ ...prev, password: "" }));
      } else {
        toast.error(res.data.data || "Update failed");
      }
    } catch (error) {
      toast.error(error.message || "Update failed");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return <div className="p-6 text-center text-gray-600">Loading profile...</div>;
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
      <Toaster position="top-center" />
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
          Account Settings
        </h1>

        <form onSubmit={handleUpdate} className="space-y-6">
          {[
            { label: "Full Name", name: "name", placeholder: "Your full name" },
            { label: "Phone", name: "phone", placeholder: "01XXXXXXXXX" },
            { label: "Blood Group", name: "bloodGroup", placeholder: "A+, B-, etc." },
            { label: "District", name: "district", placeholder: "e.g. Dhaka" },
            { label: "Upazila", name: "upazila", placeholder: "e.g. Dhanmondi" },
            { label: "City", name: "city", placeholder: "e.g. Dhaka" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                {field.label}
              </label>
              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder={field.placeholder}
                required
              />
            </div>
          ))}

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              New Password <span className="text-gray-400 text-sm">(Optional)</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Leave blank to keep old password"
            />
          </div>

          <button
            type="submit"
            className={`w-full bg-blue-600 text-white py-2 rounded-lg transition hover:bg-blue-700 ${
              updating ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={updating}
          >
            {updating ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
}
