import type * as React from 'react';

import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="max-w-[650px] mx-auto p-8">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
