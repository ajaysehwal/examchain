"use client";

import React from "react";
import Link from "next/link";
import {
  Home,
  LineChart,
  Package,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";
import Logo from "@/public/Logo-svg.svg";
import Image from "next/image";

const SideBar = () => {
  const navLinks = [
    {
      href: "#",
      icon: (
        <Home className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
      ),
      label: "Dashboard",
    },
    {
      href: "#",
      icon: (
        <ShoppingCart className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
      ),
      label: "Orders",
    },
    {
      href: "#",
      icon: (
        <Package className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
      ),
      label: "Products",
    },
    {
      href: "#",
      icon: (
        <Users2 className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
      ),
      label: "Customers",
    },
    {
      href: "#",
      icon: (
        <LineChart className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
      ),
      label: "Analytics",
    },
  ];
  return (
    <aside className="hidden max-w-44 w-full flex-col border-r bg-background sm:flex h-screen">
      <nav className="flex flex-col  gap-4 px-2 sm:py-4">
        <Link
          href="#"
          className="group flex px-3 py-5 items-center  gap-2 rounded-md bg-white text-lg font-semibold  md:h-8"
        >
          <Image
            src={Logo}
            width={50}
            height={50}
            alt="logo"
            className="w-6 h-6"
          />
          <span className="text-primary">ExamChain</span>
        </Link>
        <div className="space-y-5 mt-5">
          {navLinks.map((navItem, index) => {
            return (
              <Link
                key={index}
                href={navItem.href}
                className="flex items-center group rounded-md text-sm font-semibold  transition-colors hover:bg-primary px-3 py-2 gap-2"
              >
                {navItem.icon}
                <span className="group-hover:text-primary-foreground">
                  {navItem.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
      <nav className="mt-auto flex flex-col gap-4 px-2 sm:py-4">
        <Link
          href="#"
          className="flex items-center group rounded-md text-sm font-semibold  transition-colors hover:bg-primary px-3 py-2 gap-2"
        >
          <Settings className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
          <span className="group-hover:text-primary-foreground">Settings</span>
        </Link>
      </nav>
    </aside>
  );
};

export default SideBar;
