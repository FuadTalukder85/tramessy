import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ট্র্যামেসি - ট্রান্সপোর্ট ম্যানেজমেন্ট সফটওয়্যার',
  description: 'বাংলাদেশের সবচেয়ে উন্নত ট্রান্সপোর্ট ম্যানেজমেন্ট সফটওয়্যার। আপনার পরিবহন ব্যবসাকে ডিজিটাল করুন ট্র্যামেসির সাথে।',
  keywords: 'ট্রান্সপোর্ট ম্যানেজমেন্ট, সফটওয়্যার, বাংলাদেশ, পরিবহন, ব্যবসা',
  openGraph: {
    title: 'ট্র্যামেসি - ট্রান্সপোর্ট ম্যানেজমেন্ট সফটওয়্যার',
    description: 'বাংলাদেশের সবচেয়ে উন্নত ট্রান্সপোর্ট ম্যানেজমেন্ট সফটওয়্যার',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className="scroll-smooth">
      <body className={`${inter.className} font-bengali`}>{children}</body>
    </html>
  );
}