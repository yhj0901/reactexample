import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const LeftSidebarMenu = dynamic(
  () => import('@/presenter/component/LeftSidebarMenu/LeftSidebarMenu')
);

const Header = () => {
  return (
    <header className="hidden sm:block sm:w-64 bg-gray-400 h-full shadow-md absolute ">
      <LeftSidebarMenu />
    </header>
  );
};

export default Header;
