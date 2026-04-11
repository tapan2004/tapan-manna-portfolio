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
                        I'm a <strong>final-year B.Tech CSE student</strong> at Sister Nivedita University, Kolkata,
                        with a deep focus on Java backend engineering. My work centers on designing{' '}
                        <strong>production-ready, secure, and scalable systems</strong> that go beyond CRUD — I build
                        architectures that think ahead.
                    </p>
                    <p className="reveal" style={{ '--reveal-delay': '0.1s' }}>
                        From engineering <strong>AI-powered cafe management systems</strong> to building{' '}
                        <strong>personal finance trackers</strong> with real-time analytics, I obsess over the layers that
                        make software robust: authentication, data pipelines, service architecture, and API design.
                    </p>
                    <p className="reveal" style={{ '--reveal-delay': '0.15s' }}>
                        I also carry experience in <strong>API security testing</strong> — identifying vulnerabilities using
                        Burp Suite, Kali Linux, and OWASP Top 10 principles, giving me both the builder's and the
                        breaker's perspective.
                    </p>
                    <div className="about-details reveal" style={{ '--reveal-delay': '0.2s' }}>
                        {[
                            ['Location',   'Kolkata, West Bengal, India'],
                            ['Email',      'mannatapan588@gmail.com'],
                            ['Phone',      '+91-9749697174'],
                            ['Graduating', 'May 2026'],
                            ['Open To',    'Java Backend Developer Roles'],
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