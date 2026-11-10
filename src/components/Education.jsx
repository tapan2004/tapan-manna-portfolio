import useReveal from '../hooks/useReveal'

export default function Education() {
    const ref = useReveal()

    return (
        <section className="section-container" id="education" ref={ref}>
            <div className="section-header reveal">
                <span className="section-eyebrow">// 06. EDUCATION</span>
                <h2 className="section-heading">Academic Background</h2>
            </div>

            <div className="education-card reveal">
                <div className="edu-primary-details">
                    <div className="edu-degree-header">
                        <span className="edu-program-level">GRADUATE DEGREE</span>
                        <span className="edu-first-class-badge">First Class Degree</span>
                    </div>
                    <h3 className="edu-degree-name">Bachelor of Technology (B.Tech)</h3>
                    <p className="edu-field">Computer Science &amp; Engineering</p>
                    <div className="edu-institution-info">
                        <span className="institution-name">Sister Nivedita University</span>
                        <span className="institution-separator">•</span>
                        <span className="institution-location">Kolkata, West Bengal, India</span>
                    </div>
                </div>

                <div className="edu-timeline-details">
                    <div className="edu-timeline-period">
                        <span className="period-label">DURATION</span>
                        <span className="period-value">August 2022 – June 2026</span>
                    </div>
                    <div className="edu-status-tag">
                        <span className="status-dot" aria-hidden="true" />
                        <span>Graduated with First Class (2026)</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
