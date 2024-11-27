"use client"

// import type { Metadata } from "next";
import "./globals.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../styles/theme"

// export const metadata: Metadata = {
//   title: "Kriotek Systems",
//   description: "",
// };

const GlobalStyle = createGlobalStyle`
  body{
    font-family: "poppins";
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <html lang="en">
      <body>
        {children}
      </body>
    </html>
    </ThemeProvider>
  );
}
