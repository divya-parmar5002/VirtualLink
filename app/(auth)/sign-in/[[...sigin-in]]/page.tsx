<<<<<<< HEAD
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignIn redirectUrl="/" />
    </main>
  );
}
=======
import { SignIn } from '@clerk/nextjs';

export default function SiginInPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignIn />
    </main>
  );
}
>>>>>>> 6d248d96 (first commit)
