import { Suspense } from "react";
import PlainLayout from "@/Component/Plain-Layout";
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
