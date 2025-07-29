import { Suspense } from "react";
import PasswordReset from '@/Component/PasswordReset';
import PlainLayout from '@/Component/Plain-Layout';

export default function Page() {
  return (
    <PlainLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <PasswordReset />
      </Suspense>
    </PlainLayout>
  );
}


