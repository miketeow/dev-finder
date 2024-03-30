import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import { MdLogout } from "react-icons/md";
import { Button } from "./ui/button";

import { Avatar, AvatarImage } from "./ui/avatar";

const AccountDropdown = () => {
  const session = useSession();
  const name = session.data?.user?.name;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <Button variant="ghost">
            <Avatar>
              <AvatarImage
                src={session.data?.user?.image || `/assets/images/avatar.svg`}
                alt="avatar"
              />
            </Avatar>
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-center">{name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => signOut({ callbackUrl: "/" })}
          className="gap-2 justify-center items-center"
        >
          <MdLogout />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountDropdown;
