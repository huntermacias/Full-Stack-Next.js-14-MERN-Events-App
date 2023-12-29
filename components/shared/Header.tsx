import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
                <Image
                  src="/assets/images/logo.svg" // Ensure the logo has high contrast for a dark theme
                  alt="Evently"
                  width={150}
                  height={40}
                  className="opacity-90 hover:opacity-100 transition-opacity duration-200"
                />
            </Link>
          </div>
          <div className="hidden md:block">
            <SignedIn>
              <nav className="flex space-x-4">
                <NavItems />
              </nav>
            </SignedIn>
          </div>
          <div className="flex items-center">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
              <MobileNav />
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in">
                <a className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                  Login
                </a>
              </Link>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
