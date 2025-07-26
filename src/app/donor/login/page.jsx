"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { ErrorToast, SuccessToast } from "@/utility/FormHelper";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import "./login.css"; 

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
}).required();

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const {register,handleSubmit,formState: { errors, isSubmitting },} = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/api/login", data);
      if (res.data.status === "success") {
        SuccessToast("Login successful!");
        router.push("/dashboard");
      } else {
        ErrorToast(res.data.message || "Login failed");
      }
    } catch (err) {
      ErrorToast(err?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-red-300">
      <Toaster position="top-center" />
      {/* Blood Animation Background */}
      <div className="absolute w-full h-full blood-animation z-0 pointer-events-none"></div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 bg-white p-8 rounded-xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-red-600">Donor Login</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-red-600">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full p-2 border border-red-300 rounded text-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="you@example.com"
          />
          <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-red-600">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className="w-full p-2 border border-red-300 rounded text-red-700 pr-10 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 px-3 text-sm text-red-500 focus:outline-none"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
