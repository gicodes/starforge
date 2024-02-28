import React from "react";
import "@/styles/globals.css";

export const metadata = {
  title: "Star Forge WorldWide",
  description: `All-in-one Sports Management Team ● Sponsored by the Most Influential Football Blog of 2021`,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
