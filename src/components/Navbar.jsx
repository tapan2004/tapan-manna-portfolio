import { useState, useEffect } from 'react'

const NAV_LINKS = [
    { label: 'About',      href: '#about' },
    { label: 'Skills',     href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects',   href: '#projects' },
    { label: 'Education',  href: '#education' },
    { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && menuOpen) {
                setMenuOpen(false)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [menuOpen])

    useEffect(() => {
        const sectionIds = NAV_LINKS.map(l => l.href.slice(1))
        const elements = sectionIds
            .map(id => document.getElementById(id))
            .filter(Boolean)

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
        )

        elements.forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const scrollTo = (e, href) => {
        e.preventDefault()
        setMenuOpen(false)
        const target = document.querySelector(href)
        if (target) {
            const navHeight = 72
            const top = target.getBoundingClientRect().top + window.scrollY - navHeight
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    return (
        <header className={`navbar-header ${scrolled ? 'nav-scrolled' : ''}`}>
            <nav className="navbar-container" aria-label="Main Navigation">
                <a href="#home" className="nav-logo" onClick={e => scrollTo(e, '#home')}>
                    <span className="logo-text">Tapan Manna</span>
                    <span className="logo-badge">SE</span>
                </a>

                {/* Desktop navigation */}
                <div className="nav-desktop">
                    <ul className="nav-links">
                        {NAV_LINKS.map(item => {
                            const id = item.href.slice(1)
                            const isActive = activeSection === id
                            return (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className={`nav-link ${isActive ? 'active' : ''}`}
                                        onClick={e => scrollTo(e, item.href)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>

                    <a
                        href="/Tapan_Manna_cv.pdf"
                        download="Tapan_Manna_cv.pdf"
                        className="nav-btn-cv"
                        title="Download Curriculum Vitae"
                    >
                        <span>CV</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                    </a>
                </div>

                {/* Mobile hamburger button */}
                <button
                    className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(v => !v)}
                    aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={menuOpen}
                >
                    <span className="bar" />
                    <span className="bar" />
                </button>

                {/* Mobile dropdown */}
                {menuOpen && (
                    <div className="nav-mobile-menu">
                        <ul className="mobile-links">
                            {NAV_LINKS.map(item => {
                                const id = item.href.slice(1)
                                const isActive = activeSection === id
                                return (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            className={`mobile-link ${isActive ? 'active' : ''}`}
                                            onClick={e => scrollTo(e, item.href)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="mobile-actions">
                            <a
                                href="/Tapan_Manna_cv.pdf"
                                download="Tapan_Manna_cv.pdf"
                                className="mobile-cv-btn"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                <span>Download Curriculum Vitae</span>
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
