"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, Toaster } from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

const schema = yup.object({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("New password is required"),
});

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const otp = searchParams.get("otp");
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/api/recover/resetPassword", {
        email,
        otp,
        password: data.password,
      });

      if (res.data.status === "success") {
        toast.success("Password reset successful. Logging in...");

        // Auto login
        const loginRes = await axios.post("/api/login", {
          email,
          password: data.password,
        });

        if (loginRes.data.status === "success") {
          setTimeout(() => router.push("/dashboard"), 1500);
        } else {
          router.push("/donor/login"); // fallback
        }
      } else {
        toast.error(res.data.data || "Reset failed");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-100 to-red-200">
      <Toaster />
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md relative">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">Reset Your Password</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-red-600 font-medium mb-1">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className="w-full p-3 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 text-red-700 pr-10"
                placeholder="Enter new password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-red-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <p className="text-sm text-red-500 mt-1">{errors.password?.message}</p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition"
          >
            {isSubmitting ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        <div className="mt-6 text-sm text-center">
          <p className="text-gray-500">
            Already reset?{" "}
            <button
              onClick={() => router.push("/donor/login")}
              className="text-red-500 hover:underline font-medium"
            >
              Go to Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
