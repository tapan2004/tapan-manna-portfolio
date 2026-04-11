import useReveal from '../hooks/useReveal'

export default function Experience() {
    const ref = useReveal()
    return (
        <section className="section-pad alt-bg" id="experience" ref={ref}>
            <div className="section-tag reveal">// 03 — experience</div>
            <div className="section-title reveal">Work <em>Experience</em></div>
            <div className="exp-card reveal" style={{ '--reveal-delay': '0.1s' }}>
                <div className="exp-badge">INTERN</div>
                <div className="exp-role">Experiential Learner Intern</div>
                <div className="exp-company">Remote Internship</div>
                <div className="exp-date">APRIL 2025 – JULY 2025 · 4 MONTHS · REMOTE</div>
                <div className="exp-tools">
                    {['Postman','Burp Suite','Kali Linux','OWASP Top 10'].map(t => (
                        <span className="exp-tool" key={t}>{t}</span>
                    ))}
                </div>
                <ul className="exp-bullets">
                    <li>
                        <span>Performed <strong>API security testing</strong> using Postman and Burp Suite, identifying and documenting <strong>10+ security vulnerabilities</strong>, improving API reliability, robustness, and secure endpoint validation.</span>
                    </li>
                    <li>
                        <span>Applied <strong>OWASP Top 10 security principles</strong> while performing validation and verification testing using Kali Linux, generating structured test reports and technical documentation for multiple API endpoints.</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}