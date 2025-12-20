"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { PaletteSwitcher } from "@/components/layout/PaletteSwitcher";
import { webRoutes } from "@/constants/route";


export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href={webRoutes.home()} className="flex items-center gap-3 text-foreground">
            <div className="size-6 text-primary-600">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6_330)">
                  <path
                    clipRule="evenodd"
                    d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_330">
                    <rect fill="white" height="48" width="48" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-tight">
              Eros Nguyen
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-8">
            <nav className="flex items-center gap-9">
              <Link
                href={webRoutes.projects()}
                className="text-sm font-medium text-muted-foreground hover:text-primary-600 transition-colors"
              >
                Dự án
              </Link>
              <Link
                href={webRoutes.blogs()}
                className="text-sm font-medium text-muted-foreground hover:text-primary-600 transition-colors"
              >
                Blog
              </Link>
              <Link
                href={webRoutes.aboutMe()}
                className="text-sm font-medium text-muted-foreground hover:text-primary-600 transition-colors"
              >
                Về tôi
              </Link>
            </nav>

            <div className="flex gap-2">
              <LanguageSwitcher />
              <ThemeToggle />
              <PaletteSwitcher />
            </div>

            <div className="relative size-10 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="secondary" size="icon" className="md:hidden">
            <span className="text-2xl">☰</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
