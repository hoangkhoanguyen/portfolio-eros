import Link from "next/link";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="container mx-auto mt-20 py-8 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        <p className="text-sm text-muted-foreground">
          © 2024 Eros Nguyen. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com"
            className="text-muted-foreground hover:text-primary-600 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" aria-hidden="true" />
          </Link>
          <Link
            href="https://linkedin.com"
            className="text-muted-foreground hover:text-primary-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" aria-hidden="true" />
          </Link>
          <Link
            href="https://twitter.com"
            className="text-muted-foreground hover:text-primary-600 transition-colors"
            aria-label="Twitter"
          >
            <Mail className="w-6 h-6" aria-hidden="true" />
          </Link>
          <Link
            href="https://twitter.com"
            className="text-muted-foreground hover:text-primary-600 transition-colors"
            aria-label="Twitter"
          >
            <Facebook className="w-6 h-6" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
