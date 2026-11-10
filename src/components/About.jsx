import useReveal from '../hooks/useReveal'

const PILLARS = [
    {
        tag: 'SYSTEMS ARCHITECTURE',
        title: 'Backend & Distributed Engineering',
        desc: 'Designing resilient microservices, asynchronous message streaming with Apache Kafka, gRPC remote procedure calls, and clean layered architectures across Java/Spring Boot and C#/.NET Core.'
    },
    {
        tag: 'CROSS-PLATFORM ENGINEERING',
        title: 'Full-Stack & Client Software',
        desc: 'Building responsive web platforms, desktop tools, and client-facing applications using React, Node.js, Angular, and modern cross-platform development patterns.'
    },
    {
        tag: 'DATA INFRASTRUCTURE',
        title: 'Database Design & High Concurrency',
        desc: 'Structuring relational schemas in PostgreSQL and MySQL with composite indexing, utilizing SQLite and Redis for sub-millisecond lookups, and enforcing transactional integrity under race conditions.'
    },
    {
        tag: 'SECURITY & VERIFICATION',
        title: 'Defensive Engineering & API Testing',
        desc: 'Applying OWASP Top 10 standards, pre-retrieval access claim boundaries, JWT stateless session handling, and rigorous endpoint validation with Postman, Burp Suite, and Kali Linux.'
    }
]

export default function About() {
    const ref = useReveal()

    return (
        <section className="section-container" id="about" ref={ref}>
            <div className="section-header reveal">
                <span className="section-eyebrow">// 01. ABOUT</span>
                <h2 className="section-heading">Engineering Background &amp; Philosophy</h2>
            </div>

            <div className="about-editorial-grid">
                <div className="about-narrative reveal">
                    <p className="narrative-lead">
                        I am a Software Developer and Computer Science graduate focused on building dependable backend systems, full-stack software, and reliable infrastructure.
                    </p>
                    <p>
                        Currently, as a <strong>Junior Software Development Engineer at The Thirty Three</strong>, I develop full-stack applications, desktop solutions, and distributed backend services utilizing <strong>C#, ASP.NET Core, Node.js, React, Go, and Apache Kafka</strong>.
                    </p>
                    <p>
                        My engineering foundation was shaped through intensive coursework at Sister Nivedita University, followed by a software engineering internship at <strong>Sunyam Software</strong> working with <strong>Java, Spring Boot, and PostgreSQL</strong>, as well as hands-on API security testing and vulnerability assessment.
                    </p>
                    <p>
                        I value clean abstractions, well-documented APIs, sensible database indexing, and software that remains maintainable in production environments.
                    </p>

                    <div className="about-spec-sheet">
                        <div className="spec-item">
                            <span className="spec-label">Current Role</span>
                            <span className="spec-value">Junior SDE, The Thirty Three</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">Location</span>
                            <span className="spec-value">Kolkata, West Bengal, India</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">Education</span>
                            <span className="spec-value">B.Tech in Computer Science &amp; Engineering</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">Email</span>
                            <span className="spec-value">
                                <a href="mailto:tapanmanna.cs@gmail.com" className="spec-link">tapanmanna.cs@gmail.com</a>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="about-pillars-column">
                    <div className="pillars-list">
                        {PILLARS.map((p, idx) => (
                            <div className="pillar-item reveal" key={p.title} style={{ '--reveal-delay': `${idx * 0.08}s` }}>
                                <span className="pillar-tag">{p.tag}</span>
                                <h3 className="pillar-title">{p.title}</h3>
                                <p className="pillar-desc">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
