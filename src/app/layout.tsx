import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "DMC Software Solutions | AI Expert, Software Engineering, Automation & Cloud",
    template: "%s | DMC Software Solutions"
  },
  description: "Freelance Software Engineer and AI Expert specializing in AI Consulting, AI Agents, Automation, and Cloud Architecture. Based in Hessen, Germany.",
  keywords: ["AI Expert", "AI Consulting", "AI Agents", "Software Engineer", "Software Engineering", "Freelance Developer", "Machine Learning", "AI Solutions", "Automation", "Cloud Architecture", "Web Development", "Linsengericht", "Frankfurt", "Hessen"],
  authors: [{ name: "DMC Software Solutions" }],
  creator: "DMC Software Solutions",
  publisher: "DMC Software Solutions",
  metadataBase: new URL('https://dmc-software-solutions.com'),
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: '/',
    languages: {
      'de-DE': '/',
      'en-US': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://dmc-software-solutions.com',
    siteName: 'DMC Software Solutions',
    title: 'DMC Software Solutions | AI Expert, Software Engineering, Automation & Cloud',
    description: 'Freelance Software Engineer and AI Expert specializing in AI Consulting, AI Agents, Automation, and Cloud Architecture.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'DMC Software Solutions Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMC Software Solutions | AI Expert, Software Engineering, Automation & Cloud',
    description: 'Freelance Software Engineer and AI Expert specializing in AI Consulting, AI Agents, Automation, and Cloud Architecture.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'google-site-verification': 'uVyFrY4Wm2UKN77u70geo0Cjye883I5WIDE7Kk_2PmU',
    'msapplication-TileColor': '#ffffff',
    'geo.region': 'DE-HE',
    'geo.placename': 'Linsengericht',
    'geo.position': '50.2667;9.1833',
    'ICBM': '50.2667, 9.1833',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['ProfessionalService', 'LocalBusiness'],
        '@id': 'https://dmc-software-solutions.com/#organization',
        name: 'DMC Software Solutions',
        description: 'Freelance Software Engineer and AI Expert specializing in AI Solutions, AI Agents, AI Consulting, Automation, and Cloud Architecture',
        url: 'https://dmc-software-solutions.com',
        logo: {
          '@type': 'ImageObject',
          '@id': 'https://dmc-software-solutions.com/#logo',
          url: 'https://dmc-software-solutions.com/logo.png',
          width: 1200,
          height: 630,
        },
        image: { '@id': 'https://dmc-software-solutions.com/#logo' },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Linsengericht',
          addressRegion: 'Hessen',
          addressCountry: 'DE',
        },
        email: 'contact@dmc-software-solutions.com',
        founder: {
          '@type': 'Person',
          name: 'Dorian Müller',
        },
        sameAs: [
          'https://www.linkedin.com/in/dorian-m%C3%BCller-b641b1164/',
          'https://github.com/LeadBeetle',
        ],
        priceRange: '$$',
        serviceType: [
          'Software Development',
          'App Development',
          'Automation Solutions',
          'AI Solutions',
          'AI Consulting',
          'AI Agent Development',
          'Machine Learning Consulting',
          'Cloud Architecture',
          'Web Development',
          'Mobile App Development'
        ],
        areaServed: [
          {
            '@type': 'Country',
            name: 'Germany',
          },
          {
            '@type': 'State',
            name: 'Hessen',
          },
          {
            '@type': 'City',
            name: 'Frankfurt am Main',
          },
          {
            '@type': 'City',
            name: 'Hanau',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Software Development & AI Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI Consulting & Strategy',
                description: 'Expert consulting on AI implementation, strategy, and integration for businesses',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI Agent Development',
                description: 'Custom AI agent development and automation solutions',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Software Development',
                description: 'Custom software, web, and mobile application development',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Cloud Architecture',
                description: 'Cloud infrastructure design and implementation',
              },
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://dmc-software-solutions.com/#website',
        url: 'https://dmc-software-solutions.com',
        name: 'DMC Software Solutions',
        publisher: { '@id': 'https://dmc-software-solutions.com/#organization' },
        inLanguage: 'de-DE',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dmc-software-solutions.com/#webpage',
        url: 'https://dmc-software-solutions.com',
        name: 'DMC Software Solutions | AI Expert, Software Engineering, Automation & Cloud',
        isPartOf: { '@id': 'https://dmc-software-solutions.com/#website' },
        about: { '@id': 'https://dmc-software-solutions.com/#organization' },
        description: 'Freelance Software Engineer and AI Expert specializing in AI Consulting, AI Agents, Automation, and Cloud Architecture. Based in Hessen, Germany.',
        inLanguage: 'de-DE',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dmc-software-solutions.com/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://dmc-software-solutions.com',
          },
        ],
      },
      {
        '@type': 'Person',
        '@id': 'https://dmc-software-solutions.com/#person',
        name: 'Dorian Müller',
        url: 'https://dmc-software-solutions.com',
        image: {
          '@type': 'ImageObject',
          url: 'https://dmc-software-solutions.com/profile.jpg',
          width: 800,
          height: 800,
        },
        jobTitle: 'Freelance Software Engineer & AI Expert',
        worksFor: { '@id': 'https://dmc-software-solutions.com/#organization' },
        sameAs: [
          'https://www.linkedin.com/in/dorian-m%C3%BCller-b641b1164/',
          'https://github.com/LeadBeetle',
        ],
        knowsAbout: [
          'Artificial Intelligence',
          'AI Consulting',
          'AI Agents',
          'Machine Learning',
          'Software Development',
          'Cloud Architecture',
          'Automation',
          'Web Development',
          'Mobile Development',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Linsengericht',
          addressRegion: 'Hessen',
          addressCountry: 'DE',
        },
      }
    ],
  };

  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
