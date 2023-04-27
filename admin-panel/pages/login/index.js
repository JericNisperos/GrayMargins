import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "@/components/Navbar";

function LoginPage() {

  return (
    <div>
      <>
      <Navbar />
        Signed in as someone@email.com <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    </div>
  );
}

export default LoginPage;
