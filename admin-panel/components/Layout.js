import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "@/components/Navbar";

function Layout({children}) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-stone-200 min-h-screen w-screen flex items-center">
        <div className="text-center w-full">
          <button onClick={() => signIn('google')} className="text-black bg-neutral-300 p-3 rounded-lg font-bold">Sign in with Google</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-screen">
      <Navbar />
      <div className="flex-grow">
        {children}
        
        </div>
    </div>
  );
}

export default Layout;
