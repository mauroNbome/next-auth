import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Auth",
  description: "Next Auth with Clerk and mongoDB",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang='en'>
      <body className={inter.className}>
        <ClerkLoading>
          <Loader />
        </ClerkLoading>
        <ClerkLoaded>
          <Header />
          {children}
        </ClerkLoaded>
      </body>
    </html>
  </ClerkProvider>
  );
}
