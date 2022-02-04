import React from 'react';
import MobileNavigation from "./MobileNavigation";

export default function Header({getSearchResult}) {
  return  (
  <div>
    <MobileNavigation getSearchResult={getSearchResult}/>       
  </div>);
}
