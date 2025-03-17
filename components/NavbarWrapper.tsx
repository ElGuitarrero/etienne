"use client"
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar'

export default function NavbarWrapper() {
  const [showNavbar, setShowNavbar] = useState(false);
  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  useEffect(() => {
    if (isLandingPage) {
      const handleScroll = () => {
        if (window.scrollY > window.innerHeight) {
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      setShowNavbar(true);
    }
  }, [isLandingPage]);

  if (!showNavbar) return null;
  
  return <Navbar animate={isLandingPage} path={pathname as string} />;
}