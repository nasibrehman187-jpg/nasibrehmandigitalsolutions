import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/landing/Navbar";
import { Footer } from "../components/landing/Footer";
import { FloatingWhatsApp } from "../components/landing/FloatingWhatsApp";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[75vh] items-center justify-center px-6 py-24">
      <div className="mx-auto max-w-lg text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F766E]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#B38A3D]" />
          <span>Error 404</span>
        </div>
        <h1 className="mt-4 font-display text-5xl sm:text-6xl font-bold tracking-tight text-[#111827]">
          404
        </h1>
        <h2 className="mt-3 font-display text-xl sm:text-2xl font-semibold text-[#111827]">
          Page not found
        </h2>
        <p className="mt-3 text-sm text-[#5B6472] leading-relaxed">
          The page you're looking for may have moved or no longer exists.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-md bg-[#0F766E] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-[#0D9488] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]"
          >
            Back to Home
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-md border border-[#E7E1D6] bg-[#FFFFFF] px-5 py-2.5 text-xs sm:text-sm font-medium text-[#111827] hover:bg-[#F3EEE6] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-[#E7E1D6] bg-[#FFFFFF] px-5 py-2.5 text-xs sm:text-sm font-medium text-[#111827] hover:bg-[#F3EEE6] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. You can try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => {
    // Resolve absolute site base URL from Vite env (set in .env as VITE_SITE_URL).
    // Falls back to a relative path — social crawlers need an absolute URL, so
    // ensure VITE_SITE_URL is set in your Vercel / Cloudflare environment variables.
    const siteUrl =
      (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ||
      "https://nasibrehmandigitalsolutions.vercel.app";
    const ogImage = `${siteUrl}/logo-full.png`;

    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#F7F3EC" },
        { title: "Digital Solution by Nasib Rehman | Websites, AI Automation & Voice Agents" },
        {
          name: "description",
          content:
            "Digital Solution by Nasib Rehman provides professional website development, AI automation, AI chatbots and AI voice agent solutions for businesses.",
        },
        { name: "author", content: "Nasib Rehman" },
        {
          property: "og:title",
          content: "Digital Solution by Nasib Rehman | Websites, AI Automation & Voice Agents",
        },
        {
          property: "og:description",
          content:
            "Digital Solution by Nasib Rehman provides professional website development, AI automation, AI chatbots and AI voice agent solutions for businesses.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Digital Solution by Nasib Rehman | Websites, AI Automation & Voice Agents",
        },
        {
          name: "twitter:description",
          content:
            "Digital Solution by Nasib Rehman provides professional website development, AI automation, AI chatbots and AI voice agent solutions for businesses.",
        },
        { property: "og:image", content: ogImage },
        { name: "twitter:image", content: ogImage },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "icon", href: "/favicon.ico", type: "image/x-icon", sizes: "32x32" },
        { rel: "icon", href: "/logo-icon.svg", type: "image/svg+xml" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
        },
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative overflow-x-hidden">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
      <Toaster position="top-center" richColors theme="light" />
    </QueryClientProvider>
  );
}
