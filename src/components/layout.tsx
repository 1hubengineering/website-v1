import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { ModalContent, ProjectInquiry } from "@/components/project-inquiry";
import { InquiryContext } from "@/components/inquiry-context";
import { MobileSectorLinks, SectorsMenu } from "@/components/sectors-menu";
import { findPageMeta } from "@/content/pages";
import { company, mainNav, primaryCta, services } from "@/content/site";

export function Layout() {
  // The server renders the default (light) theme; a saved choice is applied after hydration.
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  // Keep the head in sync after client-side navigation.
  useEffect(() => {
    const meta = findPageMeta(pathname);
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    if (!hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  useEffect(() => {
    // Initial fragments can be resolved before React mounts the target section.
    const sectionId = window.location.hash.slice(1);
    if (!sectionId) return;
    let cancelled = false;
    void document.fonts.ready.then(() => {
      if (!cancelled) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "instant", block: "start" });
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.style.colorScheme = next;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", next === "dark" ? "#0b1f3b" : "#ffffff");
    try {
      localStorage.setItem("andhub-theme", next);
    } catch {
      /* Storage is optional. */
    }
  }

  return (
    <InquiryContext.Provider value={() => setInquiryOpen(true)}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header" id="top">
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {mainNav.map((item) =>
              item.to === "/sectors/" ? (
                <SectorsMenu key={item.to} />
              ) : (
                <NavLink key={item.to} to={item.to}>
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>
          <div className="header-actions">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>
            <span className="header-divider" />
            <Button className="header-cta" size="sm" onClick={() => setInquiryOpen(true)}>
              Let’s talk
              <ArrowUpRight />
            </Button>
            <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
              <Dialog.Trigger
                ref={menuButtonRef}
                className="menu-toggle"
                aria-label="Open navigation"
              >
                <span />
                <span />
              </Dialog.Trigger>
              <ModalContent className="mobile-menu">
                <Dialog.Title>Explore AndHub</Dialog.Title>
                <Dialog.Description className="sr-only">
                  Go to a page of the website.
                </Dialog.Description>
                <nav aria-label="Mobile navigation">
                  {mainNav.map((item) => (
                    <div key={item.to}>
                      <NavLink to={item.to} onClick={() => setMenuOpen(false)}>
                        {item.label}
                        <ArrowUpRight size={21} />
                      </NavLink>
                      {item.to === "/sectors/" && (
                        <MobileSectorLinks onNavigate={() => setMenuOpen(false)} />
                      )}
                    </div>
                  ))}
                  <Button
                    onClick={() => {
                      setMenuOpen(false);
                      setInquiryOpen(true);
                    }}
                  >
                    Start a project
                    <ArrowUpRight />
                  </Button>
                </nav>
              </ModalContent>
            </Dialog.Root>
          </div>
        </div>
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer className="site-footer on-navy">
        <div className="container">
          <div className="footer-top">
            <div>
              <Brand footer />
              <p>
                {company.tagline}
                <br />
                {company.location}
              </p>
            </div>
            <div className="footer-links">
              <div>
                <span>SERVICES</span>
                {services.map((service) => (
                  <Link to="/solutions/" key={service}>
                    {service}
                  </Link>
                ))}
              </div>
              <div>
                <span>EXPLORE</span>
                {mainNav.map((item) => (
                  <Link to={item.to} key={item.to}>
                    {item.label}
                  </Link>
                ))}
              </div>
              <div>
                <span>CONTACT</span>
                <Link to={primaryCta.to}>{primaryCta.label}</Link>
                <a href={`mailto:${company.email}`}>{company.email}</a>
                {company.phones.map((phone) => (
                  <a key={phone.href} href={phone.href}>
                    {phone.label}
                  </a>
                ))}
                <a href={company.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} {company.name}.</span>
            <span className="footer-signoff">
              IDEAS. ENGINEERED.
            </span>
            <a href="#top">
              Back to top
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </footer>
      <ProjectInquiry
        open={inquiryOpen}
        onOpenChange={setInquiryOpen}
        returnFocusFallback={menuButtonRef}
      />
    </InquiryContext.Provider>
  );
}
