import "./globals.css";

export const metadata = {
  title: "Todo App",
  description:
    "A simple todo app for learning Next.js 13, TypeScript and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
