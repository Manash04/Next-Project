"use client";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          width={30} 
          height={30} 
          alt="Logo"
          className="object-container"
        />
        <p className="logo_text"> Promptopia</p>
      </Link>
    </nav>
  );
}

export default Nav;
