import "./globals.css";

export const metadata = {
  title: "Apple",
  description: "Apple Inc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sfProDisplay">{children}</body>
    </html>
  );
}
