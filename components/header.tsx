"use client";
import React from "react";
import { ModeToggle } from "@/components/theme-toggle";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const session = useSession();

  return (
    <header>
      <div>
        {session.data ? (
          <Button onClick={() => signOut()}>Sign Out</Button>
        ) : (
          <Button onClick={() => signIn("google")}>Sign In</Button>
        )}
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
