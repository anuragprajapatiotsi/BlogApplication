"use client";
import { Button } from "./button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
export default function Navbar() {
  //   const [active, setActive] = useState<"home" | "about" | "contact-us">("home");
  const pathname = usePathname();
  return (
    <div className="flex justify-between p-2 text-2xl bg-blue-300">
      <div>
        <h1>Blog Website</h1>
      </div>
      <div className="flex items-center justify-between gap-5 text-xl">
        <Button
          variant={pathname === "/" ? "default" : "outline"}
          //   onClick={() => setActive("home")}
          asChild
        >
          <Link href="/">Home</Link>
        </Button>
        <Button
          variant={pathname === "/About" ? "default" : "outline"}
          //   onClick={() => setActive("about")}
          asChild
        >
          <Link href="/About">About</Link>
        </Button>
        <Button
          variant={pathname === "/ContactUs" ? "default" : "outline"}
          //   onClick={() => setActive("contact-us")}
          asChild
        >
          <Link href="/ContactUs">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
