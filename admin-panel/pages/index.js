import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import Image from "next/image";

function Home() {
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
<Layout>
  <nav className="p-2 flex items-center gap-4 bg-stone-300 justify-between">
    <div>

    </div>
    <div className="flex items-center gap-4 mr-12">
    <img alt="prof" src={session?.user?.image} width="50" height="50" className="rounded-full" />
  <p className="text-lg font-bold">{session?.user?.name}</p>
    </div>
  
  </nav>
  
  
</Layout>
    </div>
  );
}

export default Home;
