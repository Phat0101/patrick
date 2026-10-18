import Link from "next/link";

import { ThemeToggle } from "@/components/site/theme-toggle";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "/projects", label: "Playground" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-4 md:px-6">
        <Link href="/" className="text-sm font-medium tracking-tight">
          Patrick Nguyen
        </Link>
        <nav aria-label="Main" className="group/nav hidden items-center gap-6 text-sm md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-secondary transition-colors hover:!text-foreground group-hover/nav:text-muted-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-1">
          <ThemeToggle />
          <Button asChild size="sm" className="rounded-full px-4">
            <Link href="#contact">Get in touch</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
