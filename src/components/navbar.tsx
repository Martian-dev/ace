"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky left-0 top-0 flex w-full items-center justify-between border-b border-slate-700 bg-gray-800 p-2 px-6 text-white">
      <Link href="/">
        <h1 className="text-2xl">Ace</h1>
      </Link>
      <SignedOut>
        <Button>
          <Link href="/dashboard">Sign in</Link>
        </Button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
