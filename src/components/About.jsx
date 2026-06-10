import useReveal from '../hooks/useReveal'

export default function About() {
    const ref = useReveal()
    return (
        <section className="section-pad alt-bg" id="about" ref={ref}>
            <div className="section-tag reveal">// 01 — about</div>
            <div className="section-title reveal">Who I <em>Am</em></div>
            <div className="about-grid">
                <div className="about-text">
                    <p className="reveal">
                        I'm a <strong>B.Tech Computer Science Graduate (2026)</strong> from Sister Nivedita University, Kolkata, with hands-on full-stack development experience as a <strong>Software Engineering Intern at Sunyam Software</strong>. My focus is on delivering robust, production-ready backend systems and web applications.
                    </p>
                    <p className="reveal" style={{ '--reveal-delay': '0.1s' }}>
                        I am highly proficient in <strong>Java, Spring Boot, Spring Security, and Spring Data JPA</strong> for building secure, scalable RESTful APIs, alongside frontend development in <strong>Angular and Next.js</strong>. I have practical experience working with <strong>PostgreSQL, MySQL</strong>, and end-to-end architectures.
                    </p>
                    <p className="reveal" style={{ '--reveal-delay': '0.15s' }}>
                        With a strong foundation in <strong>OOP, authentication systems, and Git/GitHub workflows</strong>, as well as experience in API security testing (using Burp Suite, Kali Linux, and OWASP Top 10), I seek a <strong>Java Backend or Full-Stack Developer role</strong>.
                    </p>
                    <div className="about-details reveal" style={{ '--reveal-delay': '0.2s' }}>
                        {[
                            ['Location',   'Kolkata, West Bengal, India'],
                            ['Email',      'mannatapan588@gmail.com'],
                            ['Phone',      '+91-9749697174'],
                            ['Graduated',  'May 2026'],
                            ['Open To',    'Java Backend / Full-Stack Roles'],
                        ].map(([k, v]) => (
                            <div className="detail-row" key={k}>
                                <span className="detail-key">{k}</span>
                                <span className="detail-val">{v}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="about-cards">
                    {[
                        { icon: '🏗️', title: 'Backend Architecture',  text: 'Layered Controller–Service–Repository patterns, stateless JWT sessions, role-based authorization, and Spring ecosystem mastery.' },
                        { icon: '🤖', title: 'AI-Integrated Systems', text: 'ML pipelines with Scikit-Learn, time-series forecasting with Facebook Prophet, recommendation engines using Apriori algorithm.' },
                        { icon: '🔒', title: 'API Security',          text: 'Practical OWASP Top 10 application, Burp Suite and Postman testing, vulnerability documentation for real-world endpoints.' },
                        { icon: '⚙️', title: 'DevOps Familiarity',   text: 'Docker for containerization, Redis for caching and session management in distributed backend systems.' },
                    ].map((c, i) => (
                        <div className="about-card reveal" style={{ '--reveal-delay': `${i * 0.1}s` }} key={c.title}>
                            <span className="ac-icon">{c.icon}</span>
                            <div className="ac-title">{c.title}</div>
                            <div className="ac-text">{c.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
