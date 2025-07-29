"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

const schema = yup.object({
  email: yup.string().email().required("Email is required"),
});

export default function ForgotPasswordPage() {
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
      const res = await axios.get(`/api/recover/verifyEmail?email=${data.email}`);
      if (res.data.status === "success") {
        toast.success("OTP sent to your email");
        router.push(`/donor/verify-otp?email=${data.email}`);
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
        <h2 className="text-xl font-semibold mb-4 text-red-600">Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          className="w-full p-2 border rounded focus:outline-none mb-2"
        />
        <p className="text-red-500 text-sm mb-4">{errors.email?.message}</p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-red-600 text-white w-full py-2 rounded hover:bg-red-700"
        >
          {isSubmitting ? "Sending OTP..." : "Send OTP"}
        </button>
      </form>
    </div>
  );
}
