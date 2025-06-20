import "@/styles/globals.css";
import type { Metadata } from "next";
import "@/styles/fonts.css";
import Script from "next/script";
import Header from "@/modules/components/@layout/Header";
import Footer from "@/modules/components/@layout/Footer";

export const metadata: Metadata = {
  title: "Protfolio",
  description: "With class-based body toggle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var savedTheme = localStorage.getItem('theme');
                if (!savedTheme || savedTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch(e) {}
            })();
          `}
        </Script>
      </head>
      <body
        className={`antialiased bg-[url('/bg/bg1.png')] bg-contain bg-start bg-no-repeat`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
