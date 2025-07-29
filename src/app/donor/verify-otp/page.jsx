import { Suspense } from "react";
import PlainLayout from "@/Component/Layout/PlainLayout";
import OTPVerifyPage from "@/Component/OtpVerification";

export default function Page() {
  return (
    <PlainLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <OTPVerifyPage />
      </Suspense>
    </PlainLayout>
  );
}
