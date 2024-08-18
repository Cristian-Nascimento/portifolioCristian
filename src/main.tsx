import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { register } from 'swiper/element/bundle'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Main = () => {
  useEffect(() => {
    const menuIcon = document.querySelector<HTMLDivElement>("#menu-icon");
    const navbar = document.querySelector<HTMLDivElement>(".navbar");
    const sections = document.querySelectorAll<HTMLElement>("section");
    const navLinks = document.querySelectorAll<HTMLAnchorElement>(".navbar a");

    const handleScroll = () => {
      const top = window.scrollY;

      sections.forEach((sec) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            const activeLink = document.querySelector<HTMLAnchorElement>(`.navbar a[href*=${id}]`);
            if (activeLink) {
              activeLink.classList.add("active");
            }
          });
        }
      });
    };

    const handleMenuClick = () => {
      if (menuIcon && navbar) {
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");
      }
    };

    const handleNavLinkClick = () => {
      if (navbar) {
        navbar.classList.remove("active");
        if (menuIcon) {
          menuIcon.classList.remove("bx-x");
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    if (menuIcon) {
      menuIcon.addEventListener('click', handleMenuClick);
    }
    navLinks.forEach((link) => {
      link.addEventListener('click', handleNavLinkClick);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (menuIcon) {
        menuIcon.removeEventListener('click', handleMenuClick);
      }
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleNavLinkClick);
      });
    };
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(<Main />);
