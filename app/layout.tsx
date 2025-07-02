import "./globals.css"; 
import { ThemeProvider } from "../lib/theme-provider";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
        <head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  />
</head>
      <body className="bg-white dark:bg-gray-900 transition-colors">
        <ThemeProvider>
          <Navbar /> {/* Add this line */}
          <main className="pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}