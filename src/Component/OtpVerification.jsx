"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

//Yup validation schema
const schema = yup.object({
  otp: yup
    .string()
    .required("OTP is required")
    .matches(/^\d{6}$/, "OTP must be exactly 6 digits"),
});

export default function OTPVerifyPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/api/recover/verifyOTP", {
        email,
        otp: data.otp,
      });

      if (res.data.status === "success") {
        toast.success("OTP Verified");
        router.push(`/donor/reset-password?email=${email}&otp=${data.otp}`);
      } else {
        toast.error(res.data.data || "Invalid OTP");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-red-100">
      <Toaster position="top-center" />
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">
          Verify OTP
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
              One-Time Password (OTP)
            </label>
            <input
              id="otp"
              type="text"
              maxLength={6}
              placeholder="Enter 6-digit OTP"
              autoComplete="one-time-code"
              {...register("otp")}
              className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500 ${
                errors.otp ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.otp && (
              <p className="text-red-500 text-sm mt-1">{errors.otp.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-200"
          >
            {isSubmitting ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      </div>
    </div>
  );
}
