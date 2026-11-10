import useReveal from '../hooks/useReveal'

const ACHIEVEMENTS = [
    {
        issuer: 'HackerRank',
        credential: '5-Star Java Badge',
        date: 'March 2024',
        type: 'Skill Assessment',
        description:
            'Earned top-tier 5-star badge in Java programming, validating problem-solving proficiency, object-oriented principles, algorithmic execution, and core Java syntax mastery.'
    },
    {
        issuer: 'Amazon',
        credential: 'Junior Software Developer',
        date: 'January 2026',
        type: 'Professional Training',
        description:
            'Completed comprehensive training covering core Java architecture, backend design fundamentals, software delivery lifecycles, and industry best practices in software engineering.'
    },
    {
        issuer: 'Board Infinity',
        credential: 'Data Structures & Backend with Java',
        date: 'June 2025',
        type: 'Specialized Coursework',
        description:
            'Hands-on coursework covering algorithms, Spring Boot microservices, JDBC, JPA/Hibernate persistence, and robust RESTful API engineering.'
    }
]

export default function Achievements() {
    const ref = useReveal()

    return (
        <section className="section-container" id="achievements" ref={ref}>
            <div className="section-header reveal">
                <span className="section-eyebrow">// 05. CERTIFICATIONS</span>
                <h2 className="section-heading">Verified Credentials &amp; Recognition</h2>
                <p className="section-subheading">
                    Formal skill assessments, specialized engineering programs, and validated competencies.
                </p>
            </div>

            <div className="credentials-grid">
                {ACHIEVEMENTS.map((item, idx) => (
                    <div
                        className="credential-card reveal"
                        key={item.credential}
                        style={{ '--reveal-delay': `${idx * 0.08}s` }}
                    >
                        <div className="credential-top">
                            <span className="credential-issuer">{item.issuer}</span>
                            <span className="credential-date">{item.date}</span>
                        </div>
                        <h3 className="credential-title">{item.credential}</h3>
                        <div className="credential-type">{item.type}</div>
                        <p className="credential-desc">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
