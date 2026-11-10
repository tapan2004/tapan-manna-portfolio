export default function Footer() {
    const scrollToTop = e => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const currentYear = new Date().getFullYear()

    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-left">
                    <span className="footer-name">Tapan Manna</span>
                    <span className="footer-role">Software Developer | Full-Stack Engineer</span>
                    <span className="footer-copy">
                        © {currentYear} Tapan Manna. All rights reserved.
                    </span>
                </div>

                <div className="footer-right">
                    <ul className="footer-links">
                        <li>
                            <a
                                href="https://github.com/tapan2004"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-link"
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://linkedin.com/in/tapan-manna"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-link"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="#home"
                                onClick={scrollToTop}
                                className="footer-link back-to-top"
                                aria-label="Scroll back to top"
                            >
                                <span>Back to top</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <line x1="12" y1="19" x2="12" y2="5" />
                                    <polyline points="5 12 12 5 19 12" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
