import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'How it Works', href: '#showcase' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' },
    ]

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    <a href="#" className="navbar-logo">
                        <span className="navbar-logo-icon">🎓</span>
                        CollegePaglu
                    </a>

                    <div className="navbar-links">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="navbar-link">
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="navbar-right">
                        <button className="navbar-btn">
                            Get Started
                        </button>
                    </div>

                    <button
                        className="navbar-mobile-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'var(--beige-cream)',
                    zIndex: 9999,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '24px',
                }}>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{
                            position: 'absolute',
                            top: '24px',
                            right: '24px',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <X size={32} color="var(--forest-deep)" />
                    </button>

                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{
                                fontSize: '24px',
                                fontWeight: 700,
                                color: 'var(--forest-deep)',
                                textDecoration: 'none',
                                fontFamily: 'Space Grotesk, sans-serif',
                            }}
                        >
                            {link.name}
                        </a>
                    ))}

                    <button className="navbar-btn" style={{ marginTop: '24px' }}>
                        Get Started
                    </button>
                </div>
            )}
        </>
    )
}

export default Navbar
