"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

const schema = yup.object({
  otp: yup.string().length(6, "OTP must be 6 digits").required("OTP is required"),
});

export default function OTPVerifyPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

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
        toast.error(res.data.data);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100">
      <Toaster />
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4 text-red-600">Verify OTP</h2>
        <input
          type="text"
          placeholder="Enter 6-digit OTP"
          {...register("otp")}
          className="w-full p-2 border rounded focus:outline-none mb-2"
        />
        <p className="text-red-500 text-sm mb-4">{errors.otp?.message}</p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-red-600 text-white w-full py-2 rounded hover:bg-red-700"
        >
          {isSubmitting ? "Verifying..." : "Verify OTP"}
        </button>
      </form>
    </div>
  );
}
