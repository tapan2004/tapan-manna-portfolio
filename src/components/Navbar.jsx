import { useState, useEffect } from 'react'

const NAV_LINKS = [
    { label: 'About',      href: '#about' },
    { label: 'Skills',     href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects',   href: '#projects' },
    { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled]   = useState(false)
    const [menuOpen, setMenuOpen]   = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollTo = (e, href) => {
        e.preventDefault()
        setMenuOpen(false)
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className={scrolled ? 'nav-scrolled' : ''}>
            <div className="nav-logo">TAPAN MANNA</div>

            {/* Desktop links */}
            <ul className="nav-links">
                {NAV_LINKS.map(l => (
                    <li key={l.label}>
                        <a href={l.href} onClick={e => scrollTo(e, l.href)}>{l.label}</a>
                    </li>
                ))}
            </ul>

            {/* Mobile hamburger — hidden on desktop via CSS */}
            <button
                className={`hamburger ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(v => !v)}
                aria-label="Toggle menu"
            >
                <span /><span /><span />
            </button>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="mobile-menu">
                    {NAV_LINKS.map(l => (
                        <a key={l.label} href={l.href} onClick={e => scrollTo(e, l.href)}>
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="/Tapan_Manna_CV.pdf"
                        download="Tapan_Manna_CV.pdf"
                        className="mobile-cv"
                    >
                        ⬇ &nbsp;Download CV
                    </a>
                </div>
            )}
        </nav>
    )
}