"use client"
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  const {user, isLoaded} = useUser()
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full h-20 fixed top-0 flex justify-between items-center px-24 bg-[var(--bgSoft)]">
        <div className="text-xl">
          Dashboard Demonestration NextJS-14 
        </div>
        <div className="flex gap-4">
          <Link href={"/dashboard"} className="hover:text-[var(--primary)] bg-slate-900 px-4 py-2 rounded-md">
            Dashboard
          </Link>
          {
            isLoaded && user &&
            <>
              <UserButton afterSignOutUrl="/" />
            </>
          }

        </div>
      </div>
      <div className="flex flex-col gap-5 justify-center">
        <h1 className="text-xl">
          This web application is only for demonestration dashboard.
        </h1>
          <p className="">Go to Dashboard:</p>
        <Link
          href={"/dashboard"}
        >
          <Image
            className="border border-gray-600 cursor-pointer hover:scale-105 ease-in-out duration-500 rounded-md saturate-150"
            src="/dashboard.png"
            alt="Dashboard"
            width={600}
            height={300}
          />
        </Link>
        <a href={"/dashboard"}  className="btn_primary w-fit px-4 py-3 mt-9" > Go to Dashboard &#8594; </a>
      </div>

    </main>
  );
}
