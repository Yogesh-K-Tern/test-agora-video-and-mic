import React from "react";

interface iHomeLayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: iHomeLayoutProps) {
  return <div>{children}</div>;
}

export default Layout;
