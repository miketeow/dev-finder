"use client";
import React from "react";
import { ModeToggle } from "@/components/theme-toggle";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import AccountDropdown from "./account-dropdown";
import { MdLogin } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  const session = useSession();

  return (
    <header className=" mx-auto px-4 dark:bg-gray-800 py-4 bg-gray-200">
      <div className="flex justify-between items-center">
        <div>
          <Link
            href="/"
            className="flex gap-2 items-center dark:hover:text-slate-400 hover:text-blue-400"
          >
            <Image
              src="/assets/icons/globe.svg"
              alt="logo"
              width={40}
              height={40}
            />
            <h1 className="text-xl">Dev Finder</h1>
          </Link>
        </div>
        <div className="flex gap-4">
          {session.data ? (
            <AccountDropdown />
          ) : (
            <Button onClick={() => signIn("google")} className="gap-2">
              <MdLogin />
              Sign In
            </Button>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
