import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Souvik Jana | Full Stack Developer",
  description:
    "Personal portfolio of Souvik Jana — Computer Science undergraduate and aspiring Full Stack Developer passionate about building scalable web applications and exploring AI technologies.",
  openGraph: {
    title: "Souvik Jana | Full Stack Developer",
    description:
      "Personal portfolio of Souvik Jana — CS undergraduate at AMC Engineering College, Bengaluru.",
    type: "website",
    locale: "en_IN",
  },
  keywords: [
    "Souvik Jana",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "AMC Engineering College",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: "#1F1E25" }}>
      <body
        className="min-h-screen bg-main text-primary font-mono antialiased flex flex-col justify-between"
        style={{ backgroundColor: "#1F1E25", color: "#F5F5F7" }}
      >
        <Header />
        <div className="flex-1 w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
