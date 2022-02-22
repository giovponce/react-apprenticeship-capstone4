import React from 'react';
import DesktopSidebar from '../Components/DesktopSidebar';
import MobileSidebar from '../Components/MobileSidebar';

export default function Sidebar({toggleCategory, toggleMobileCategory}) {

  return (
      <>
        <DesktopSidebar toggleCategory={toggleCategory}/>
        <MobileSidebar toggleMobileCategory={toggleMobileCategory}/>
      </>
  )
}
