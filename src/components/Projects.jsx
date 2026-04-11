import useReveal from '../hooks/useReveal'

const PROJECTS = [
    {
        num: 'PROJECT 01',
        date: 'JAN 2026 – FEB 2026',
        featured: true,
        title: 'Personal Finance Tracker',
        desc: <span>A full-featured <strong>backend system</strong> for managing personal finances with real-time expense tracking, budgeting, and automated reporting.</span>,
        features: [
            'Controller–Service–Repository architecture with Spring Boot & JPA',
            'JWT-based authentication & role-based authorization',
            '15+ REST APIs for transactions, budgeting & financial analytics',
            'Budget alert notifications & email verification via JavaMailSender',
            'Automated Excel reports with Apache POI & Spring Scheduler',
            'Secure profile image uploads via Cloudinary',
        ],
        stack: ['Java', 'Spring Boot', 'Spring Security', 'JPA/Hibernate', 'MySQL', 'Apache POI', 'Cloudinary', 'JWT'],
        github: 'https://github.com/tapan2004/FinanceTrackerApi',
    },
    {
        num: 'PROJECT 02',
        date: 'SEP 2025 – NOV 2025',
        featured: true,
        title: 'AI-Powered Smart Cafe Management System',
        desc: <span>A <strong>scalable, AI-driven backend</strong> integrating Java and Python microservices for intelligent cafe operations and ML-based analytics.</span>,
        features: [
            'Spring Boot (Java) + FastAPI (Python) microservice integration',
            'ML pipelines: sales prediction, peak hour detection, stock forecasting',
            'Unified analytics dashboard API consolidating multiple AI services',
            'Real-time recommendation engine using Apriori algorithm',
            'Time-series forecasting using Facebook Prophet',
            'JWT authentication & role-based authorization with Spring Security',
        ],
        stack: ['Java', 'Spring Boot', 'FastAPI', 'Scikit-Learn', 'Prophet', 'Apriori', 'Python', 'MySQL', 'JWT'],
        github: 'https://github.com/tapan2004/smart-cafe-management-system',
    },
    {
        num: 'PROJECT 03',
        date: '2025',
        featured: false,
        title: 'Event Ticket Booking — Concurrency & Locking',
        desc: <span>Backend solving the <strong>overselling problem</strong> in high-concurrency ticket booking using Pessimistic Locking and transactional consistency.</span>,
        features: [
            'Pessimistic Locking via JPA to prevent race conditions on seat inventory',
            'ACID transactions — booking fully commits or fully rolls back',
            '20 concurrent requests for 5 seats: exactly 5 succeed, 15 return 400',
            'Concurrency stress-tested with parallel bash script',
            'Event + Section + Booking entity model with capacity enforcement',
        ],
        stack: ['Java 21', 'Spring Boot', 'JPA/Hibernate', 'Pessimistic Locking', 'MySQL', 'Lombok'],
        github: 'https://github.com/tapan2004/Ticket_Booking_API',
    },
    {
        num: 'PROJECT 04',
        date: '2025',
        featured: false,
        title: 'Spring Boot Async Order Processing',
        desc: <span><strong>Production-grade async order system</strong> using <code>@Async</code>, <code>ThreadPoolTaskExecutor</code> and <code>CompletableFuture</code> — modelled after real e-commerce backends.</span>,
        features: [
            'Non-blocking API: order confirmed instantly, background tasks run in parallel',
            'Custom thread pool: Core 5, Max 20, Queue 500 with CallerRunsPolicy',
            'Parallel async tasks: notify, assign vendor, package, dispatch',
            'Graceful shutdown + structured trackingId logging',
        ],
        stack: ['Java 17', 'Spring Boot', '@Async', 'ThreadPoolTaskExecutor', 'CompletableFuture', 'Lombok'],
        github: 'https://github.com/tapan2004/spring-boot-async-order-processing',
    },
    {
        num: 'PROJECT 05',
        date: '2025',
        featured: false,
        title: 'FullStack Email Sender',
        desc: <span>A <strong>full-stack email app</strong> with Spring Boot REST backend and React + Tailwind frontend supporting Gmail, Outlook, and any SMTP provider.</span>,
        features: [
            'JavaMailSender with secure SMTP for Gmail & Outlook',
            'React + Tailwind CSS frontend consuming REST API',
            'Unit testing with Mockito for service layer reliability',
            'End-to-end API tested with Postman',
        ],
        stack: ['Java', 'Spring Boot', 'JavaMailSender', 'React', 'Tailwind CSS', 'Mockito'],
        github: 'https://github.com/tapan2004/Email-Service-Application',
    },
]

export default function Projects() {
    const ref = useReveal()
    const featured = PROJECTS.filter(p => p.featured)
    const others   = PROJECTS.filter(p => !p.featured)

    return (
        <section className="section-pad" id="projects" ref={ref}>
            <div className="section-tag reveal">// 04 — projects</div>
            <div className="section-title reveal">What I've <em>Built</em></div>

            {/* Featured 2-col */}
            <div className="projects-grid">
                {featured.map((p, i) => (
                    <ProjectCard
                        key={p.num} p={p}
                        className={`reveal`}
                        style={{ '--reveal-delay': `${i * 0.1}s` }}
                    />
                ))}
            </div>

            {/* Divider */}
            <div className="more-label reveal" style={{ '--reveal-delay': '0.05s' }}>
                <span className="more-line" />
                <span className="more-text">More Projects</span>
                <span className="more-line" />
            </div>

            {/* Same 2-col grid as featured */}
            <div className="projects-grid">
                {others.map((p, i) => (
                    <ProjectCard
                        key={p.num} p={p}
                        className="reveal"
                        style={{ '--reveal-delay': `${0.1 + i * 0.08}s` }}
                    />
                ))}
            </div>

            {/* GitHub CTA */}
            <div className="github-cta reveal" style={{ '--reveal-delay': '0.3s' }}>
                <a
                    href="https://github.com/tapan2004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                >
                    🐙 &nbsp;View All 32+ Projects on GitHub
                </a>
            </div>
        </section>
    )
}

function ProjectCard({ p, className = '', style }) {
    return (
        <div className={`project-card ${className}`} style={style}>
            <div className="pc-header">
                <span className="pc-num">{p.num}</span>
                <span className="pc-date">{p.date}</span>
            </div>
            <div className="pc-title">{p.title}</div>
            <div className="pc-desc">{p.desc}</div>
            <ul className="pc-features">
                {p.features.map(f => (
                    <li key={f}>{f}</li>
                ))}
            </ul>
            <div className="pc-stack">
                {p.stack.map(s => <span className="st" key={s}>{s}</span>)}
            </div>
            <a href={p.github} className="pc-link" target="_blank" rel="noopener noreferrer">
                View on GitHub →
            </a>
        </div>
    )
}