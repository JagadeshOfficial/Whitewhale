"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "./Logo";
import type { NavLink } from "@/lib/types";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const renderNavLink = (link: NavLink, isMobile: boolean = false) => {
    const isActive = pathname === link.href;

    if (link.subLinks) {
      if (isMobile) {
        return (
          <div key={link.label}>
            <Link
                href={link.href}
                className="font-bold text-lg px-4 py-2 w-full text-left"
                onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
            <div className="flex flex-col pl-4 border-l border-border ml-4">
              {link.subLinks.map((subLink) => (
                <Link
                  key={subLink.href}
                  href={subLink.href}
                  className={cn(
                    "px-4 py-2 text-muted-foreground hover:text-foreground",
                    pathname === subLink.href && "text-primary font-semibold"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {subLink.label}
                </Link>
              ))}
            </div>
          </div>
        );
      }
      return (
        <DropdownMenu key={link.label}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                "text-sm font-medium",
                pathname.startsWith(link.href || '') ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {link.subLinks.map((subLink) => (
              <DropdownMenuItem key={subLink.href} asChild>
                <Link href={subLink.href}>{subLink.label}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    const commonClasses = isMobile
      ? "text-lg px-4 py-2 w-full text-left"
      : "text-sm font-medium";
    
    return (
      <Button key={link.href} asChild variant="ghost">
        <Link
          href={link.href}
          className={cn(
            commonClasses,
            isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
            isMobile && "block"
          )}
          onClick={() => isMobile && setIsMobileMenuOpen(false)}
        >
          {link.label}
        </Link>
      </Button>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          {NAV_LINKS.map((link) => renderNavLink(link))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[320px] p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                   <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                      <Logo />
                    </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-4 p-4">
                  {NAV_LINKS.map((link) => renderNavLink(link, true))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
