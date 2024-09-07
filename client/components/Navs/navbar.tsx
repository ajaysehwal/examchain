import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Input } from "../ui/input";

const NavBar = () => {
  return (
    <nav className="w-full flex p-3 border-b">
      <div className="mr-auto flex flex-1 items-center border rounded-lg bg-background w-full max-w-60 px-2 gap-2">
        <Input
          type="text"
          placeholder="Search..."
          className="placeholder:text-muted-foreground outline-none border-none ring-0 bg-transparent focus-visible:ring-0"
        />
        <Search className="h-4 w-4 text-muted-foreground" />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full"
          >
            <Image
              src="/logo-svg.svg"
              width={36}
              height={36}
              alt="Avatar"
              className="overflow-hidden rounded-full"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-white">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default NavBar;
