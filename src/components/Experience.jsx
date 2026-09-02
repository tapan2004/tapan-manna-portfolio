import useReveal from '../hooks/useReveal'

export default function Experience() {
    const ref = useReveal()
    return (
        <section className="section-pad alt-bg" id="experience" ref={ref}>
            <div className="section-tag reveal">// 03 — experience</div>
            <div className="section-title reveal">Work <em>Experience</em></div>
            <div className="exp-card reveal" style={{ '--reveal-delay': '0.1s' }}>
                <div className="exp-badge">INTERN</div>
                <div className="exp-role">Software Engineering Intern</div>
                <div className="exp-company">Sunyam Software</div>
                <div className="exp-date">MAY 2026 – PRESENT · ONSIDE · KOLKATA, INDIA</div>
                <div className="exp-tools">
                    {['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Angular', 'PostgreSQL', 'Git', 'Git CLI'].map(t => (
                        <span className="exp-tool" key={t}>{t}</span>
                    ))}
                </div>
                <ul className="exp-bullets">
                    <li>
                        <span>Developing and maintaining full-stack web applications using <strong>Java, Spring Boot</strong>, and <strong>Angular / Next.js</strong>, building secure and scalable RESTful APIs alongside modern frontend interfaces.</span>
                    </li>
                    <li>
                        <span>Designing and optimizing databases with <strong>PostgreSQL</strong>, implementing secure authentication and authorization systems with <strong>Spring Security and JWT</strong>.</span>
                    </li>
                    <li>
                        <span>Leveraging <strong>OOP principles</strong> to build robust architectures and managing codebase integration seamlessly with <strong>Git/GitHub workflows</strong>.</span>
                    </li>
                </ul>
            </div>

            <div className="exp-card reveal" style={{ '--reveal-delay': '0.2s' }}>
                <div className="exp-badge">INTERN</div>
                <div className="exp-role">Experiential Learner Intern</div>
                <div className="exp-company">Remote Internship</div>
                <div className="exp-date">APRIL 2025 – JULY 2025 · 4 MONTHS · REMOTE</div>
                <div className="exp-tools">
                    {['Postman', 'Burp Suite', 'Kali Linux', 'OWASP Top 10'].map(t => (
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