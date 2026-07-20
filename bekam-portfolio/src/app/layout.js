import "./globals.css";

export const metadata = {
  title: "Bekam Berhanu | Full Stack Developer",
  description:
    "Bekam Berhanu - Full Stack Developer building user-centric digital solutions with AI integration and modern web technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}