import "./globals.css";

export const metadata = {
  title: "Bekam Berhanu | Full-Stack Developer for Web, Mobile & AI",
  description:
    "Portfolio of Bekam Berhanu, a full-stack developer from Ethiopia building simple, impactful web apps, mobile apps, and AI-powered products.",
  openGraph: {
    title: "Bekam Berhanu | Full-Stack Developer for Web, Mobile & AI",
    description:
      "Portfolio of Bekam Berhanu, a full-stack developer from Ethiopia building simple, impactful web apps, mobile apps, and AI-powered products.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}