import useReveal from '../hooks/useReveal'

const PRIMARY_LANGUAGES = [
    { name: 'Java', role: 'Core Enterprise & Backend Development', detail: 'Spring Boot ecosystem, Virtual Threads, Concurrency, JPA/Hibernate' },
    { name: 'C#', role: 'Cross-Platform & Application Engineering', detail: '.NET Core runtime, ASP.NET Core services, Desktop & Server architecture' },
    { name: 'SQL', role: 'Relational Schema Design & Query Optimization', detail: 'PostgreSQL, MySQL, SQLite, joins, transactions, indexing' },
]

const TECH_CATEGORIES = [
    {
        title: 'Programming Languages',
        items: ['Java', 'C#', 'Python', 'Go', 'SQL', 'JavaScript'],
    },
    {
        title: 'Backend Engineering',
        items: [
            'Spring Boot',
            'Spring Security',
            'Spring AI',
            'Spring Data JPA',
            'JWT Authentication & Authrization',
            'ASP.NET Core',
            'EF Framework',
            'RESTful APIs',
            'gRPC',
            'FastAPI',
        ],
    },
    {
        title: 'Frontend Development',
        items: ['React', 'TAILWIND CSS', 'BOOTSTRAP'],
    },
    {
        title: 'Databases & Data Systems',
        items: [
            'PostgreSQL',
            'MySQL',
            'MongoDB',
            'SQLite',
            'Redis',
            'Oracle',
            'NoSQL Databases',
        ],
    },
    {
        title: 'Distributed Systems & Messaging',
        items: [
            'Apache Kafka',
            'Kafka Streams',
            'Distributed Systems',
            'Microservices',
        ],
    },
    {
        title: 'Cloud & DevOps',
        items: [
            'AWS',
            'Docker',
            'Git',
            'GitHub',
            'GitHub Actions',
            'CI/CD',
            'Jenkin',
        ],
    },
    {
        title: 'Data Science & Machine Learning',
        items: [
            'Scikit-Learn',
            'Facebook Prophet',
            'Apriori Algorithm',
            'Python',
        ],
    },
    {
        title: 'Computer Science Fundamentals',
        items: [
            'Object-Oriented Programming',
            'Data Structures & Algorithms',
            'Database Management Systems',
            'Operating Systems',
            'Computer Networks',
            'Software Design Principles',
        ],
    },
]

export default function Skills() {
    const ref = useReveal()

    return (
        <section className="section-container" id="skills" ref={ref}>
            <div className="section-header reveal">
                <span className="section-eyebrow">// 02. TECH STACK</span>
                <h2 className="section-heading">Technical Competencies &amp; Tooling</h2>
                <p className="section-subheading">
                    Structured across core enterprise runtimes, distributed communication protocols, data persistence layers, and software engineering disciplines.
                </p>
            </div>

            {/* Primary Languages Highlight */}
            <div className="primary-languages-panel reveal">
                <div className="panel-eyebrow">// PRIMARY LANGUAGES</div>
                <div className="primary-lang-grid">
                    {PRIMARY_LANGUAGES.map((lang, idx) => (
                        <div className="primary-lang-card" key={lang.name}>
                            <div className="lang-header">
                                <span className="lang-index">0{idx + 1}</span>
                                <h3 className="lang-name">{lang.name}</h3>
                            </div>
                            <div className="lang-role">{lang.role}</div>
                            <div className="lang-detail">{lang.detail}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Categorized Tech Stack Grid */}
            <div className="tech-stack-grid">
                {TECH_CATEGORIES.map((cat, idx) => (
                    <div
                        className="tech-category-card reveal"
                        key={cat.title}
                        style={{ '--reveal-delay': `${(idx % 4) * 0.06}s` }}
                    >
                        <h3 className="tech-category-title">{cat.title}</h3>
                        <ul className="tech-tags-list">
                            {cat.items.map(tech => (
                                <li className="tech-tag" key={tech}>
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}
