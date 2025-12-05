"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import axios from "axios";
import PlainLayout from "@/Component/Plain-Layout";
import { ErrorToast, SuccessToast } from "@/utility/FormHelper";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";



//Phone number regex for Bangladesh
const phoneRegex = /^(\+88)?01[3-9]\d{8}$/;


// React hook form Validation Schema
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  phone: yup.string().required("Phone is required").matches(phoneRegex, "Phone number must be a valid Bangladeshi number (e.g. 01XXXXXXXXX)"),
  bloodGroup: yup.string().required("Blood group is required"),
  district: yup.string().required("District is required"),
  upazila: yup.string().required("Upazila is required"),
  city: yup.string().required("City is required"),
}).required();

export default function DonorSignupForm() {

  const {register,handleSubmit,formState: { errors },setValue,reset,} = useForm({resolver: yupResolver(schema),});
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();


  //Get Location & Set Form Data
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        if (!navigator.geolocation) {
          ErrorToast("Geolocation is not supported by this browser.");
          return;
        }

        navigator.geolocation.getCurrentPosition(async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setLatitude(lat);
          setLongitude(lng);

          const { data } = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
          );

          const address = data.address || {};
          setValue("district", address.state || "");
          setValue("upazila", address.county || "");
          setValue("city", address.city || address.town || address.village || "");
          setValue("latitude", lat);
          setValue("longitude", lng);
        }, (err) => {
          ErrorToast("Location permission denied or unavailable.");
        });
      } catch (error) {
        ErrorToast("Failed to fetch location.");
      }
    };

    fetchLocation();
  }, [setValue]);



  //Submit Handler
  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.status === "success") {
        SuccessToast("Signup successful!");
        reset(); //Clear form after success
        router.push("/donor/login");
      } else {
        ErrorToast(result.message || "Signup failed.");
      }
    } catch (err) {
      ErrorToast("Error: " + err.message);
    }
  };


  return (
    <PlainLayout>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-4xl mx-auto mt-10 p-8 border shadow-lg rounded-lg bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Donor Signup</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "name", label: "Name" },
            { name: "email", label: "Email" },
          ].map(({ name, label }) => (
            <div key={name}>
              <label className="block font-medium mb-1">{label}</label>
              <input
                type="text"
                {...register(name)}
                className="w-full p-2 border rounded"
              />
              {errors[name] && (
                <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>
              )}
            </div>
          ))}

          {/* Password Field placed right after Email */}
          <div className="relative">
            <label className="block font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className="w-full p-2 border rounded pr-10"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 cursor-pointer text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
            )}
          </div>

          {/* Continue rest of the form */}
          {[
            { name: "phone", label: "Phone" },
            { name: "bloodGroup", label: "Blood Group", type: "select" },
            { name: "district", label: "District" },
            { name: "upazila", label: "Upazila" },
            { name: "city", label: "City" },
          ].map(({ name, label, type }) => (
            <div key={name}>
              <label className="block font-medium mb-1">{label}</label>
              {type === "select" ? (
                <select {...register(name)} className="w-full p-2 border rounded">
                  <option value="">Select</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              ) : (
                <input
                  type="text"
                  {...register(name)}
                  className="w-full p-2 border rounded"
                />
              )}
              {errors[name] && (
                <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>
              )}
            </div>
          ))}

          {/* Hidden Inputs */}
          <input type="hidden" {...register("latitude")} />
          <input type="hidden" {...register("longitude")} />

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full p-3 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Submit
            </button>
          </div>
        </form>


        {/* Map Preview */}
        {latitude && longitude && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Location Preview</h3>
            <iframe
              className="w-full h-64 border"
              src={`https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        )}
      </div>
    </PlainLayout>
  );
}
