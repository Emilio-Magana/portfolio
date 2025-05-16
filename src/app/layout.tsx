import type { Metadata } from "next";
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import Chatbot from "@/components/Chatbot/Chat";
import ParticleAnimation from "@/animation/ParticleAnimation";
import Providers from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emilio's Root",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Emilio's Crag</title>
        <meta name="description" content="Portfolio Website!" />
      </head>
      <body>
        <Providers>
          <ParticleAnimation />
          <main className="flex min-h-screen flex-col bg-gradient-to-b from-backgroundFadeB to-backgroundFadeE to-5% text-tertiary antialiased dark:bg-black">
            <Header />
            <div
              className="mx-auto max-w-[674px] phone:px-2 ipad_mini:px-8"
              id="root"
            >
              {children}
            </div>
            <Chatbot />
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
