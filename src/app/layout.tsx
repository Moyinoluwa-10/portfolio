import type { Metadata, Viewport } from "next";
import "./globals.css";
import siteConfig from "@/configs/site-config.json";
import Providers from "./providers";
import { recursive } from "./font";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.seo.title}`,
    default: "Moyinoluwa Adelowo",
  },
  applicationName: "Moyinoluwa Adelowo",
  description: `${siteConfig.seo.description}`,
  keywords: siteConfig.seo.keywords,
  authors: siteConfig.seo.author,
  icons: {
    icon: "/favicon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  openGraph: {
    type: "website",
    url: siteConfig.seo.openGraph.url,
    title: siteConfig.seo.openGraph.title,
    siteName: siteConfig.seo.openGraph.siteName,
    description: siteConfig.seo.openGraph.description,
    locale: siteConfig.seo.openGraph.locale,
    images: siteConfig.seo.openGraph.images,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.twitter.title,
    description: siteConfig.seo.twitter.description,
    site: siteConfig.seo.twitter.site,
    creator: siteConfig.seo.twitter.creator,
    images: siteConfig.seo.twitter.images,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${recursive.variable}`}
    >
      <body className="font-recursive">
        <Providers>
          <Header />
          <main className="bg-white dark:bg-black">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
