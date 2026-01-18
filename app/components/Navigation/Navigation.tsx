"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Container } from "./styles";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (path: string) => pathname === path;

  return (
    <Container className={isScrolled ? 'scrolled' : ''}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="logo"
            onClick={closeMenu}
          >
            <Image 
              src="/logo.jpg" 
              alt="ChefBFF" 
              width={45}
              height={45}
              className="rounded-lg"
            />
            <span>ChefBFF</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`desktop-nav ${isMenuOpen ? 'active' : ''}`}>
            <Link 
              href="/" 
              onClick={closeMenu}
              className={isActive('/') ? 'active' : ''}
            >
              Home
            </Link>
            <Link 
              href="/recipes" 
              onClick={closeMenu}
              className={isActive('/recipes') ? 'active' : ''}
            >
              Recipes
            </Link>
            <Link 
              href="/recipe-helper" 
              onClick={closeMenu}
              className={isActive('/recipe-helper') ? 'active' : ''}
            >
              Recipe Helper
            </Link>
            <Link 
              href="/recipes/new"
              onClick={closeMenu}
              className="button"
            >
              Add Recipe
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div
            className={`menu ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={closeMenu}>
          <div className="mobile-menu">
            <Link href="/" onClick={closeMenu}>Home</Link>
            <Link href="/recipes" onClick={closeMenu}>Recipes</Link>
            <Link href="/recipe-helper" onClick={closeMenu}>Recipe Helper</Link>
            <Link href="/recipes/new" onClick={closeMenu} className="button">Add Recipe</Link>
          </div>
        </div>
      )}
    </Container>
  );
}