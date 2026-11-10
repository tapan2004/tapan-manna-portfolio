export default function Hero() {
    return (
        <section className="hero-section" id="home">
            <div className="hero-container">
                <div className="hero-grid">
                    {/* Left Column: Editorial Information */}
                    <div className="hero-primary">
                        <div className="hero-status-pill">
                            <span className="status-indicator" aria-hidden="true" />
                            <span className="status-label">Junior Software Development Engineer</span>
                            <span className="status-separator">/</span>
                            <span className="status-company">The Thirty Three (T3) </span>
                        </div>

                        <div className="hero-title-group">
                            <h1 className="hero-name">Tapan Manna</h1>
                            <p className="hero-role">Software Developer | Full-Stack Engineer</p>
                        </div>

                        <div className="hero-bio">
                            <p>
                                B.Tech Computer Science graduate and Software Developer working across backend engineering, full-stack applications, cross-platform software and distributed systems.
                            </p>
                            <p>
                                Experienced in building applications using Java, C#, ASP.NET Core, Node.js and React, with a strong interest in scalable backend architecture, system design and reliable software infrastructure.
                            </p>
                        </div>

                        <div className="hero-actions">
                            <a href="#projects" className="btn-primary">
                                <span>View Projects</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <line x1="7" y1="17" x2="17" y2="7" />
                                    <polyline points="7 7 17 7 17 17" />
                                </svg>
                            </a>
                            <a href="#contact" className="btn-secondary">
                                <span>Get in Touch</span>
                            </a>
                            <a
                                href="/Tapan_Manna_cv.pdf"
                                download="Tapan_Manna_cv.pdf"
                                className="btn-tertiary"
                                title="Download CV"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                <span>Download CV</span>
                            </a>
                        </div>

                        <div className="hero-social-strip">
                            <a
                                href="https://github.com/tapan2004"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-social-link"
                                aria-label="GitHub Profile"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                </svg>
                                <span>github.com/tapan2004</span>
                            </a>
                            <span className="strip-divider" aria-hidden="true">•</span>
                            <a
                                href="https://linkedin.com/in/tapan-manna"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-social-link"
                                aria-label="LinkedIn Profile"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                                <span>linkedin.com/in/tapan-manna</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Profile & Engineering Card */}
                    <div className="hero-secondary">
                        <div className="hero-card-frame">
                            <div className="hero-photo-wrapper">
                                <img
                                    src="/Tapan Image.jpg"
                                    alt="Tapan Manna — Software Developer & Full-Stack Engineer"
                                    className="hero-photo"
                                    loading="eager"
                                />
                            </div>

                            <div className="hero-card-meta">
                                <div className="meta-row">
                                    <span className="meta-key">CURRENT FIRM</span>
                                    <span className="meta-val">The Thirty Three</span>
                                </div>
                                <div className="meta-row">
                                    <span className="meta-key">LOCATION</span>
                                    <span className="meta-val">Kolkata, West Bengal, India</span>
                                </div>
                                <div className="meta-row">
                                    <span className="meta-key">CORE FOCUS</span>
                                    <span className="meta-val">Backend, Full-Stack &amp; Systems</span>
                                </div>
                                <div className="meta-row">
                                    <span className="meta-key">DEGREE</span>
                                    <span className="meta-val">B.Tech CS — First Class (2026)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Engineering Highlights Bar */}
                <div className="hero-metrics-bar">
                    <div className="metric-cell">
                        <div className="metric-number">Full-Stack &amp; Cross-Platform</div>
                        <div className="metric-caption">C#, .NET, Node.js, React &amp; Go engineering</div>
                    </div>
                    <div className="metric-divider" aria-hidden="true" />
                    <div className="metric-cell">
                        <div className="metric-number">Distributed Architecture</div>
                        <div className="metric-caption">Kafka streams, gRPC, microservices &amp; Docker</div>
                    </div>
                    <div className="metric-divider" aria-hidden="true" />
                    <div className="metric-cell">
                        <div className="metric-number">Enterprise Spring Boot</div>
                        <div className="metric-caption">High-concurrency locking, RAG pipelines &amp; security</div>
                    </div>
                    <div className="metric-divider" aria-hidden="true" />
                    <div className="metric-cell">
                        <div className="metric-number">50+ Repositories</div>
                        <div className="metric-caption">Production backends, APIs &amp; system experiments</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
