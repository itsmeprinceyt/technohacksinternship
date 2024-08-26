import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohd Uvaish - TechnoHacks Internship Tasks",
  description: "A comprehensive overview of Mohd Uvaish's internship tasks at TechnoHacks Edutech, showcasing his expertise in Next.js, Tailwind CSS, and modern web development practices. Explore projects ranging from portfolio websites to advanced web applications, each highlighting his skills in full-stack development, API integration, responsive design, and more.",
  icons: {
    icon: "/logo.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
