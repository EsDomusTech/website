import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MotionConfig } from "framer-motion";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ConsultaModal } from "@/components/site/ConsultaModal";
import { CookieBanner } from "@/components/site/CookieBanner";
import { ConsultaModalProvider } from "@/lib/consulta-store";
import { getConsent } from "@/lib/cookie-consent";
import { loadGA } from "@/lib/analytics";
import { SITE } from "@/lib/site-data";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que procura não existe ou foi movida.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Página inicial
          </Link>
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Contacto
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
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ocorreu um erro inesperado. Tente recarregar a página ou volte ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Página inicial
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "EsDomusTech - Casas Modulares" },
      { name: "description", content: "Casas modulares modernas e sustentáveis no Porto, com arquitetura contemporânea, eficiência energética e tecnologia que garante rapidez e precisão." },
      { name: "author", content: "EsDomusTech" },
      { name: "google-site-verification", content: "google66209e8887b438e6" },
      { name: "google-site-verification", content: "wP7jArwcuTWSXocJiPBNILSJBLXQlSf75kDP9qyFE-0" },
      { property: "og:title", content: "EsDomusTech - Casas Modulares" },
      { property: "og:description", content: "Casas modulares modernas e sustentáveis no Porto, com arquitetura contemporânea, eficiência energética e tecnologia que garante rapidez e precisão." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE.domain },
      { property: "og:site_name", content: SITE.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EsDomusTech - Casas Modulares" },
      { name: "twitter:description", content: "Casas modulares modernas e sustentáveis no Porto, com arquitetura contemporânea, eficiência energética e tecnologia que garante rapidez e precisão." },
      { property: "og:image", content: `${SITE.domain}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: `${SITE.domain}/og-image.jpg` },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Franklin:wght@300;400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["GeneralContractor", "LocalBusiness"],
          name: SITE.name,
          url: SITE.domain,
          image: `${SITE.domain}/og-image.jpg`,
          priceRange: "€€€",
          description:
            "Estúdio de arquitetura e construção modular no Porto. Casas modulares inteligentes e design de interiores.",
          telephone: SITE.phone,
          email: SITE.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Tv. Joaquim Dias Salgueiro 186",
            postalCode: "4470-558",
            addressLocality: "Vila Nova da Telha",
            addressRegion: "Porto",
            addressCountry: "PT",
          },
          openingHours: "Mo-Fr 08:00-17:00",
          areaServed: "Portugal",
          sameAs: [
            "https://www.instagram.com/esdomustech_porto",
            "https://www.facebook.com/esdomustech/",
            "https://www.linkedin.com/company/esdomustech-casas-modulares",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    if (getConsent() === "accepted") loadGA();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ConsultaModalProvider>
        <MotionConfig reducedMotion="user">
          <a
            href="#main-content"
            className="fixed left-4 top-4 z-[9999] -translate-y-16 bg-white px-4 py-2 text-sm font-medium text-black focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
            style={{ transition: "transform 0.2s" }}
          >
            Saltar para conteúdo
          </a>
          <Navbar />
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <div id="main-content">
            <Outlet />
          </div>
          <Footer />
          <ConsultaModal />
          <CookieBanner />
        </MotionConfig>
      </ConsultaModalProvider>
    </QueryClientProvider>
  );
}
