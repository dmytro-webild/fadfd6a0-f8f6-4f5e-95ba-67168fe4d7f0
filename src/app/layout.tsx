import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Raleway } from "next/font/google";



export const metadata: Metadata = {
  title: 'ŞİRİNEVLER ER-KA Teknik | Kombi & Klima Servisi',
  description: 'Şirinevler ER-KA Teknik, Şirinevler ve çevresine uzman kombi, klima ve petek bakım, onarım ve montaj hizmetleri sunar. Güvenilir ve hızlı çözümlerle konforunuzu garanti altına alın.',
  openGraph: {
    "title": "ŞİRİNEVLER ER-KA Teknik | Kombi & Klima Servisi",
    "description": "Şirinevler ER-KA Teknik, Şirinevler ve çevresine uzman kombi, klima ve petek bakım, onarım ve montaj hizmetleri sunar. Güvenilir ve hızlı çözümlerle konforunuzu garanti altına alın.",
    "url": "https://www.sirinevlererkateknik.com",
    "siteName": "ŞİRİNEVLER ER-KA Teknik",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/man-electrical-technician-working-switchboard-with-fuses-uses-tablet_169016-23926.jpg",
        "alt": "Modern air conditioning unit in a stylish home"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "ŞİRİNEVLER ER-KA Teknik | Kombi & Klima Servisi",
    "description": "Şirinevler ER-KA Teknik, Şirinevler ve çevresine uzman kombi, klima ve petek bakım, onarım ve montaj hizmetleri sunar. Güvenilir ve hızlı çözümlerle konforunuzu garanti altına alın.",
    "images": [
      "http://img.b2bpic.net/free-photo/man-electrical-technician-working-switchboard-with-fuses-uses-tablet_169016-23926.jpg"
    ]
  },
};

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${raleway.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
