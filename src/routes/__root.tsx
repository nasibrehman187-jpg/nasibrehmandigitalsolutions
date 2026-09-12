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
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/landing/Navbar";
import { Footer } from "../components/landing/Footer";
import { Cursor } from "../components/landing/Cursor";
import { FloatingWhatsApp } from "../components/landing/FloatingWhatsApp";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Signal lost</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for drifted into the void.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
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
          href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
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
    <html lang="en" className="dark">
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

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative overflow-x-hidden">
        <Cursor />
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
      <Toaster position="top-center" richColors theme="dark" />
    </QueryClientProvider>
  );
}
