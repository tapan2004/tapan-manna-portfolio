import useReveal from '../hooks/useReveal'

const EXPERIENCES = [
    {
        id: 'the-thirty-three',
        current: true,
        company: 'The Thirty Three',
        role: 'Junior Software Development Engineer',
        dates: 'September 2026 – Present',
        locationType: 'Full-time · Kolkata, India',
        intro:
            'Developing full-stack and cross-platform software solutions, working across backend services, desktop applications, mobile applications and distributed system architectures.',
        responsibilities: [
            {
                title: 'Application Engineering',
                detail: 'Developing web, mobile and desktop applications using React, Node.js and C#/.NET.'
            },
            {
                title: 'Backend & API Development',
                detail: 'Building backend services, REST APIs and gRPC communication using ASP.NET Core and Node.js.'
            },
            {
                title: 'Database Engineering',
                detail: 'Designing and integrating SQL and NoSQL databases, including PostgreSQL, SQLite and Redis.'
            },
            {
                title: 'Distributed Systems',
                detail: 'Working with distributed architectures, Apache Kafka and asynchronous messaging.'
            },
            {
                title: 'Infrastructure & Deployment',
                detail: 'Containerizing applications with Docker and working with AWS infrastructure.'
            }
        ],
        technologies: [
            'C#',
            'ASP.NET Core',
            'Node.js',
            'React',
            'Go',
            'REST APIs',
            'gRPC',
            'PostgreSQL',
            'SQLite',
            'Redis',
            'NoSQL',
            'Docker',
            'AWS',
            'Apache Kafka'
        ]
    },
    {
        id: 'sunyam-software',
        current: false,
        company: 'Sunyam Software',
        role: 'Software Engineering Intern',
        dates: 'May 2026 – June 2026',
        locationType: 'Onsite · Kolkata, India',
        intro:
            'Developed full-stack application features and integrated enterprise backend services using the Spring ecosystem and PostgreSQL.',
        responsibilities: [
            {
                title: 'Full-Stack Development',
                detail: 'Developing and maintaining full-stack web applications using Java, Spring Boot, and Angular / Next.js, building scalable and secure RESTful APIs alongside modern frontend interfaces.'
            },
            {
                title: 'Database & Security Architecture',
                detail: 'Designing and optimizing databases with PostgreSQL, implementing secure authentication and authorization systems with Spring Security and JWT.'
            },
            {
                title: 'Object-Oriented Design & Version Control',
                detail: 'Leveraging OOP principles to build robust architectures and managing codebase integration seamlessly with Git/GitHub workflows.'
            }
        ],
        technologies: [
            'Java',
            'Spring Boot',
            'Spring Security',
            'Spring Data JPA',
            'Angular',
            'Next.js',
            'PostgreSQL',
            'Git',
            'Git CLI'
        ]
    },
    {
        id: 'remote-internship',
        current: false,
        company: 'Remote Internship',
        role: 'Experiential Learner Intern',
        dates: 'April 2025 – July 2025',
        locationType: 'Remote · 4 Months',
        intro:
            'Conducted offensive and defensive security assessments, evaluating API endpoints and establishing compliance with OWASP Top 10 vulnerabilities.',
        responsibilities: [
            {
                title: 'API Security Testing',
                detail: 'Performed API security testing using Postman and Burp Suite, identifying and documenting 10+ security vulnerabilities, improving API reliability, robustness, and secure endpoint validation.'
            },
            {
                title: 'Vulnerability Analysis & Documentation',
                detail: 'Applied OWASP Top 10 security principles while performing validation and verification testing using Kali Linux, generating structured test reports and technical documentation for multiple API endpoints.'
            }
        ],
        technologies: [
            'Postman',
            'Burp Suite',
            'Kali Linux',
            'OWASP Top 10',
            'API Security Testing'
        ]
    }
]

export default function Experience() {
    const ref = useReveal()

    return (
        <section className="section-container" id="experience" ref={ref}>
            <div className="section-header reveal">
                <span className="section-eyebrow">// 03. EXPERIENCE</span>
                <h2 className="section-heading">Professional Experience</h2>
                <p className="section-subheading">
                    Software engineering across enterprise backends, full-stack client applications, and security verification.
                </p>
            </div>

            <div className="experience-timeline">
                {EXPERIENCES.map((exp, index) => (
                    <article
                        className={`experience-entry reveal ${exp.current ? 'is-current' : ''}`}
                        key={exp.id}
                        style={{ '--reveal-delay': `${index * 0.1}s` }}
                    >
                        <div className="timeline-marker-col" aria-hidden="true">
                            <span className="marker-dot" />
                        </div>

                        <div className="exp-card">
                            <header className="exp-card-header">
                                <div className="exp-header-main">
                                    <div className="exp-company-line">
                                        <span className="exp-company-name">{exp.company}</span>
                                        {exp.current && (
                                            <span className="exp-status-pill">Current Role</span>
                                        )}
                                    </div>
                                    <h3 className="exp-role-title">{exp.role}</h3>
                                </div>

                                <div className="exp-header-meta">
                                    <span className="exp-date-range">{exp.dates}</span>
                                    <span className="exp-location-tag">{exp.locationType}</span>
                                </div>
                            </header>

                            <p className="exp-intro-text">{exp.intro}</p>

                            <div className="exp-responsibilities-block">
                                <h4 className="exp-block-title">Key Engineering Responsibilities:</h4>
                                <ul className="exp-resp-items">
                                    {exp.responsibilities.map(item => (
                                        <li key={item.title} className="exp-resp-item">
                                            <strong className="resp-label">{item.title}:</strong>{' '}
                                            <span className="resp-body">{item.detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="exp-tech-footer">
                                <span className="exp-tech-heading">Technologies Used:</span>
                                <div className="exp-badge-group">
                                    {exp.technologies.map(tech => (
                                        <span className="exp-badge" key={tech}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
