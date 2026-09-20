import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Our story' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-[hsl(var(--border)/.8)] bg-[hsl(var(--background)/.9)] backdrop-blur-xl">
      <div className="section-shell flex h-[76px] items-center justify-between">
        <Link href="/" data-testid="link-brand" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground">
            <span className="font-display text-lg italic">N</span>
          </span>
          <span className="leading-none">
            <span className="block text-[.65rem] font-bold uppercase tracking-[.2em] text-primary">Naturals</span>
            <span className="font-display text-lg">Salon &amp; Spa</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-testid={`link-nav-${item.label.toLowerCase().replace(/\s/g, '-')}`}
              className={`relative py-2 text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:bg-accent after:transition-all ${location === item.href ? 'font-semibold text-primary after:w-full' : 'text-muted-foreground after:w-0 hover:text-primary hover:after:w-full'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" data-testid="link-header-book" className="hidden items-center gap-2 rounded-full bg-accent px-5 py-3 text-xs font-bold uppercase tracking-[.12em] text-accent-foreground transition-transform hover:-translate-y-0.5 md:flex">
          Book a visit <ArrowUpRight size={15} />
        </Link>
        <button type="button" data-testid="button-mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} className="rounded-full border border-border p-2 text-primary md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-card px-5 py-4 md:hidden" aria-label="Mobile navigation">
          <div className="section-shell flex flex-col gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s/g, '-')}`} onClick={() => setOpen(false)} className={`rounded-lg px-3 py-3 text-sm ${location === item.href ? 'bg-secondary font-semibold text-primary' : 'text-muted-foreground'}`}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" data-testid="link-mobile-book" onClick={() => setOpen(false)} className="mt-2 flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-xs font-bold uppercase tracking-widest text-accent-foreground">
              Book a visit <ArrowUpRight size={15} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary py-14 text-primary-foreground">
      <div className="section-shell grid gap-10 md:grid-cols-[1.35fr_.8fr_.8fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-accent text-accent-foreground"><span className="font-display text-lg italic">N</span></span>
            <span className="font-display text-2xl">Naturals Salon &amp; Spa</span>
          </div>
          <p className="max-w-sm text-sm leading-7 text-primary-foreground/70">A considered beauty destination for women and men in Hyderabad, Telangana, India.</p>
          <p className="mt-6 text-xs uppercase tracking-[.14em] text-primary-foreground/50">Hair · Beauty · Grooming · Bridal</p>
        </div>
        <div>
          <p className="eyebrow !text-accent">Explore</p>
          <div className="mt-4 flex flex-col items-start gap-3 text-sm text-primary-foreground/75">
            <Link href="/" data-testid="link-footer-home" className="transition-colors hover:text-accent">Home</Link>
            <Link href="/about" data-testid="link-footer-about" className="transition-colors hover:text-accent">Our story</Link>
            <Link href="/services" data-testid="link-footer-services" className="transition-colors hover:text-accent">Services</Link>
            <Link href="/contact" data-testid="link-footer-contact" className="transition-colors hover:text-accent">Contact</Link>
          </div>
        </div>
        <div>
          <p className="eyebrow !text-accent">Find us</p>
          <p className="mt-4 text-sm leading-7 text-primary-foreground/75">[ADD EXACT ADDRESS]<br />Hyderabad, Telangana, India</p>
          <p className="mt-3 text-sm text-primary-foreground/75">[ADD PHONE NUMBER]</p>
          <p className="mt-1 text-sm text-primary-foreground/75">[ADD EMAIL]</p>
        </div>
      </div>
      <div className="section-shell mt-12 flex flex-col gap-2 border-t border-primary-foreground/15 pt-5 text-xs text-primary-foreground/50 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Naturals Salon &amp; Spa Hyderabad</span>
        <span>Beauty, made personal.</span>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <div className="grain min-h-[100dvh] bg-background"><SiteHeader />{children}<SiteFooter /></div>;
}