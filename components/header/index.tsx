'use client';

import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const colors = {
    primary: '#ff6b57ff',
    secondary: '#ffada2ff',
    background: '#f1f1f1',
    text: '#000000',
    white: '#ffffff',
    error: 'tomato',
  };

  const navItems = [
    { name: 'Início', href: '#' },
    { 
      name: 'Produto', 
      href: '#',
      submenu: ['Download', 'Serviço 2', 'Serviço 3']
    },
    { name: 'Sobre', href: '#' },
    { name: 'Contato', href: '#' },
  ];

  return (
    <header style={{ backgroundColor: colors.white, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', padding: 20 }}>
      <style>{`
        @media (min-width: 768px) {
          .mobile-menu-btn { display: none; }
          .desktop-nav { display: flex; }
          .mobile-menu { display: none !important; }
        }
        @media (max-width: 767px) {
          .mobile-menu-btn { display: flex; }
          .desktop-nav { display: none; }
        }
      `}</style>
      
      <nav style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '4rem' }}>
          <div style={{ flexShrink: 0 }}>
            <a href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: colors.primary, textDecoration: 'none' }}>
              <img src="logo-horizontal.png" alt="Pig Money" className='h-20' />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav" style={{ alignItems: 'center', gap: '2rem' }}>
            {navItems.map((item, idx) => (
              <div key={idx} style={{ position: 'relative' }}>
                {item.submenu ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(idx)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        padding: '0.5rem 0.75rem',
                        borderRadius: '0.375rem',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: colors.text,
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.background}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <span>{item.name}</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    {activeDropdown === idx && (
                      <div 
                        style={{
                          position: 'absolute',
                          left: 0,
                          marginTop: '0.5rem',
                          width: '12rem',
                          borderRadius: '0.375rem',
                          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                          backgroundColor: colors.white,
                          zIndex: 10
                        }}
                      >
                        <div style={{ padding: '0.25rem 0' }}>
                          {item.submenu.map((subitem, subIdx) => (
                            <a
                              key={subIdx}
                              href="#"
                              style={{ 
                                display: 'block',
                                padding: '0.5rem 1rem',
                                fontSize: '0.875rem',
                                color: colors.text,
                                textDecoration: 'none',
                                transition: 'background-color 0.2s, color 0.2s'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = colors.background;
                                e.currentTarget.style.color = colors.primary;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = colors.text;
                              }}
                            >
                              {subitem}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    style={{
                      padding: '0.5rem 0.75rem',
                      borderRadius: '0.375rem',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: colors.text,
                      textDecoration: 'none',
                      transition: 'background-color 0.2s, color 0.2s',
                      display: 'block'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.background;
                      e.currentTarget.style.color = colors.primary;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = colors.text;
                    }}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <button
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                backgroundColor: colors.primary,
                color: colors.white,
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.secondary}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.primary}
            >
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-btn">
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                borderRadius: '0.375rem',
                color: colors.primary,
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.background}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {isOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="mobile-menu" style={{ paddingBottom: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {navItems.map((item, idx) => (
                <div key={idx}>
                  <a
                    href={item.href}
                    style={{
                      display: 'block',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '0.375rem',
                      fontSize: '1rem',
                      fontWeight: '500',
                      color: colors.text,
                      textDecoration: 'none',
                      transition: 'background-color 0.2s, color 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.background;
                      e.currentTarget.style.color = colors.primary;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = colors.text;
                    }}
                  >
                    {item.name}
                  </a>
                  {item.submenu && (
                    <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      {item.submenu.map((subitem, subIdx) => (
                        <a
                          key={subIdx}
                          href="#"
                          style={{
                            display: 'block',
                            padding: '0.5rem 0.75rem',
                            borderRadius: '0.375rem',
                            fontSize: '0.875rem',
                            color: colors.text,
                            textDecoration: 'none',
                            transition: 'background-color 0.2s, color 0.2s'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = colors.background;
                            e.currentTarget.style.color = colors.primary;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = colors.text;
                          }}
                        >
                          {subitem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.5rem 0.75rem',
                  marginTop: '0.5rem',
                  borderRadius: '0.375rem',
                  fontSize: '1rem',
                  fontWeight: '500',
                  backgroundColor: colors.primary,
                  color: colors.white,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.secondary}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.primary}
              >
                Login
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}