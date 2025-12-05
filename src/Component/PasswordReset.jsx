"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, Toaster } from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

// Validation Schema
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

        // Auto-login
        const loginRes = await axios.post("/api/login", {
          email,
          password: data.password,
        });

        if (loginRes.data.status === "success") {
          setTimeout(() => router.push("/dashboard"), 1500);
        } else {
          router.push("/donor/login");
        }
      } else {
        toast.error(res.data.data || "Reset failed");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-r from-red-100 to-red-200">
      <Toaster position="top-center" />
      <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
          Reset Your Password
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-red-700 mb-1">
              New Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Enter new password"
                autoComplete="new-password"
                className={`w-full p-3 border rounded-lg pr-10 text-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 ${
                  errors.password ? "border-red-500" : "border-red-300"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-red-500"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            {isSubmitting ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        <div className="mt-6 text-sm text-center text-gray-600">
          Already reset?{" "}
          <button
            onClick={() => router.push("/donor/login")}
            className="text-red-500 hover:underline font-medium"
          >
            Go to Login
          </button>
        </div>
      </div>
    </div>
  );
}
