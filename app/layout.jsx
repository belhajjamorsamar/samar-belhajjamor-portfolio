import {JetBrains_Mono} from "next/font/google";
import "./globals.css";
import { Variable, Weight } from "lucide-react";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  weight:["100","200","300","400","500","600","700","800"],
  variable:'--font-jetbrainsMono'
  });

  export const metadata = {
    title: "Samar Bel Hajj Amor - Portfolio",
    description: "Explore the portfolio of Samar Bel Hajj Amor, a passionate Full-Stack Developer specializing in Next.js, Laravel, and Data Science.",
  };  

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrains_Mono.variable}>
      <Header/>
      <StairTransition/>
      <PageTransition> {children}</PageTransition>
     
      </body>
    </html>
  );
}
