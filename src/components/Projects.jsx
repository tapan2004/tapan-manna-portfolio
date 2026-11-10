import useReveal from '../hooks/useReveal'

const FEATURED_PROJECTS = [
    {
        index: '01',
        title: 'DocuSense',
        subtitle: 'Enterprise RAG Platform with Pre-Retrieval Security',
        date: '2026',
        category: 'AI & Security Infrastructure',
        summary:
            'A production-grade Retrieval-Augmented Generation (RAG) platform with multi-tenant clearance boundaries and pre-retrieval security to prevent data leakage in enterprise document query systems.',
        architecture: [
            {
                label: 'Security & Data Isolation',
                detail: 'Engineered a secure document retrieval pipeline extracting RBAC claim boundaries from JWT signatures to execute pre-retrieval SQL filtering in pgvector, preventing unauthorized vector context bleed.'
            },
            {
                label: 'Java 21 Concurrency',
                detail: 'Optimized ingestion pipelines by processing Apache Tika-parsed document chunk contextualization concurrently using Java 21 Virtual Threads for high throughput.'
            },
            {
                label: 'Sub-Millisecond Caching',
                detail: 'Integrated Redis exact-match caching keyed on MD5 hashes of user claims and queries, returning repeat semantic search responses in <1ms.'
            },
            {
                label: 'Telemetry & Guardrails',
                detail: 'Built a secondary LLM evaluation pipeline tracking token costs, query latencies, groundedness callouts, and paginated audit logs for enterprise compliance.'
            }
        ],
        stack: [
            'Java 21',
            'Spring Boot 4',
            'Spring Security',
            'Spring AI',
            'PostgreSQL (pgvector)',
            'Redis',
            'React',
            'Docker'
        ],
        github: 'https://github.com/tapan2004/DocuSense'
    },
    {
        index: '02',
        title: 'PayGuard',
        subtitle: 'Real-Time Payment Fraud Detection Pipeline',
        date: '2026',
        category: 'Distributed Systems & Event Streaming',
        summary:
            'A high-throughput event-driven microservices architecture analyzing live payment transactions in real time with stateful streaming rules to detect and prevent fraudulent transactions.',
        architecture: [
            {
                label: 'Distributed Event Streaming',
                detail: 'Built asynchronous transaction ingestion pipelines using Apache Kafka Streams for real-time risk scoring, sliding-window event aggregation, and rapid pattern matching.'
            },
            {
                label: 'Microservices & Resilience',
                detail: 'Engineered stateless Spring Boot microservices with idempotent transaction handlers, circuit breakers, and global exception interceptors for fault tolerance.'
            },
            {
                label: 'Database Optimization',
                detail: 'Designed relational transaction ledger schemas in PostgreSQL tuned with composite indexes and partitioning for sub-10ms query execution under sustained write load.'
            }
        ],
        stack: [
            'Java 21',
            'Spring Boot',
            'Apache Kafka',
            'Kafka Streams',
            'PostgreSQL',
            'Docker'
        ],
        github: 'https://github.com/tapan2004/PayGuard'
    },
    {
        index: '03',
        title: 'DevSentinAI',
        subtitle: 'Event-Driven AI Code Review Engine',
        date: '2026',
        category: 'Developer Tooling & Vector Memory',
        summary:
            'An automated GitHub code review platform analyzing pull request diffs using semantic code chunking, vector memory, and LLMs to provide inline architectural feedback.',
        architecture: [
            {
                label: 'Webhook Ingress',
                detail: 'Built secure, HMAC-validated GitHub webhook listeners processing pull request events asynchronously with durable queuing.'
            },
            {
                label: 'AST-Aware Chunking',
                detail: 'Segmented multi-file code diffs into semantic chunks and generated vector embeddings stored in Redis Vector Store for cross-repository contextual lookups.'
            },
            {
                label: 'Automated Feedback',
                detail: 'Leveraged Spring AI to generate automated pull request inline review comments evaluating code quality, security vulnerabilities, and design patterns.'
            }
        ],
        stack: [
            'Java 21',
            'Spring Boot',
            'Spring AI',
            'Redis Vector Store',
            'GitHub Webhooks',
            'Docker'
        ],
        github: 'https://github.com/tapan2004/DevSentinAI'
    },
    {
        index: '04',
        title: 'Personal Finance Tracker',
        subtitle: 'Secure Multi-Tenant Ledger & Analytics API',
        date: 'Jan 2026 – Feb 2026',
        category: 'Backend Architecture & Analytics',
        summary:
            'A full-featured backend system for personal financial management, featuring multi-account expense tracking, automated budget notifications, and generated financial audit exports.',
        architecture: [
            {
                label: 'Layered Architecture',
                detail: 'Built upon Controller–Service–Repository design patterns with Spring Boot, Spring Data JPA, and Hibernate for clean domain isolation.'
            },
            {
                label: 'Security & Access Control',
                detail: 'Stateless JWT-based authentication, BCrypt password hashing, and role-based endpoint authorization across 15+ REST endpoints.'
            },
            {
                label: 'Scheduled Jobs & Reporting',
                detail: 'Automated Excel ledger generation via Apache POI and cron-driven budget limit warnings delivered through JavaMailSender.'
            }
        ],
        stack: [
            'Java',
            'Spring Boot',
            'Spring Security',
            'JPA/Hibernate',
            'MySQL',
            'Apache POI',
            'Cloudinary',
            'JWT'
        ],
        github: 'https://github.com/tapan2004/FinanceTrackerApi'
    }
]

const SECONDARY_PROJECTS = [
    {
        index: '05',
        title: 'AI-Powered Smart Cafe Management',
        subtitle: 'Hybrid Java & Python Microservices',
        date: 'Sep 2025 – Nov 2025',
        summary:
            'Scalable backend integrating Java (Spring Boot) and Python (FastAPI) microservices for cafe operations, market-basket recommendations (Apriori algorithm), and demand forecasting (Facebook Prophet).',
        highlights: [
            'Java/Python dual-runtime microservice architecture',
            'Apriori recommendation engine for complementary menu pairing',
            'Time-series order volume forecasting using Prophet',
            'Unified REST analytics dashboard API'
        ],
        stack: ['Java', 'Spring Boot', 'FastAPI', 'Scikit-Learn', 'Prophet', 'Python', 'MySQL', 'JWT'],
        github: 'https://github.com/tapan2004/smart-cafe-management-system'
    },
    {
        index: '06',
        title: 'Event Ticket Booking — Concurrency & Locking',
        subtitle: 'Race Condition Prevention with Pessimistic Locking',
        date: '2025',
        summary:
            'Backend architecture solving the overselling problem in high-concurrency ticket sales using JPA Pessimistic Write Locking (PESSIMISTIC_WRITE) and transactional boundaries.',
        highlights: [
            'Strict Pessimistic Locking prevents overselling under parallel burst traffic',
            'Tested with 20 parallel requests for 5 seats: exactly 5 commit, 15 fail safely',
            'Atomic ACID transaction guarantees across Event, Section, and Seat reservations'
        ],
        stack: ['Java 21', 'Spring Boot', 'JPA/Hibernate', 'Pessimistic Locking', 'MySQL', 'Lombok'],
        github: 'https://github.com/tapan2004/Ticket_Booking_API'
    },
    {
        index: '07',
        title: 'Spring Boot Async Order Processing',
        subtitle: 'Non-Blocking E-Commerce Workflow Pipeline',
        date: '2025',
        summary:
            'Production-grade asynchronous order processing system using @Async, ThreadPoolTaskExecutor, and CompletableFuture, modeled after enterprise fulfillment engines.',
        highlights: [
            'Non-blocking order intake: immediate confirmation with background orchestration',
            'Tuned thread pool: Core 5, Max 20, Queue 500 with CallerRunsPolicy rejection handler',
            'Concurrent execution of notifications, vendor assignment, and shipping label creation'
        ],
        stack: ['Java 21', 'Spring Boot', '@Async', 'ThreadPoolTaskExecutor', 'CompletableFuture', 'Lombok'],
        github: 'https://github.com/tapan2004/spring-boot-async-order-processing'
    },
    {
        index: '08',
        title: 'FullStack Email Sender',
        subtitle: 'Multi-Provider SMTP Communication Service',
        date: '2025',
        summary:
            'Reliable email dispatch system with Spring Boot REST backend and React frontend supporting Gmail, Outlook, and custom SMTP relays with comprehensive Mockito test coverage.',
        highlights: [
            'Multi-provider SMTP integration via JavaMailSender with TLS encryption',
            'React client with input sanitization and responsive delivery previews',
            'Comprehensive Mockito unit test suite verifying mail service fault tolerance'
        ],
        stack: ['Java', 'Spring Boot', 'JavaMailSender', 'React', 'Tailwind CSS', 'Mockito'],
        github: 'https://github.com/tapan2004/Email-Service-Application'
    }
]

export default function Projects() {
    const ref = useReveal()

    return (
        <section className="section-container" id="projects" ref={ref}>
            <div className="section-header reveal">
                <span className="section-eyebrow">// 04. PROJECTS</span>
                <h2 className="section-heading">Featured Systems &amp; Software</h2>
                <p className="section-subheading">
                    Production-grade backends, distributed pipelines, and concurrency-hardened software solutions.
                </p>
            </div>

            {/* Featured Projects: Editorial Long-form */}
            <div className="featured-projects-list">
                {FEATURED_PROJECTS.map((proj, idx) => (
                    <article
                        className="featured-project-card reveal"
                        key={proj.title}
                        style={{ '--reveal-delay': `${idx * 0.08}s` }}
                    >
                        <div className="featured-card-top">
                            <div className="project-index-group">
                                <span className="project-num">PROJECT {proj.index}</span>
                                <span className="project-category">{proj.category}</span>
                            </div>
                            <span className="project-date">{proj.date}</span>
                        </div>

                        <div className="featured-card-header">
                            <h3 className="project-title">{proj.title}</h3>
                            <p className="project-subtitle">{proj.subtitle}</p>
                        </div>

                        <p className="project-summary">{proj.summary}</p>

                        <div className="project-architecture-breakdown">
                            <h4 className="breakdown-title">Architectural &amp; Implementation Details:</h4>
                            <div className="architecture-grid">
                                {proj.architecture.map(arch => (
                                    <div className="arch-item" key={arch.label}>
                                        <span className="arch-label">{arch.label}</span>
                                        <p className="arch-detail">{arch.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="featured-card-footer">
                            <div className="project-stack">
                                {proj.stack.map(tech => (
                                    <span className="tech-badge" key={tech}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="project-links">
                                <a
                                    href={proj.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-github-link"
                                >
                                    <span>Source Repository</span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <line x1="7" y1="17" x2="17" y2="7" />
                                        <polyline points="7 7 17 7 17 17" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Secondary Projects Section */}
            <div className="secondary-projects-section reveal">
                <div className="section-sub-header">
                    <h3 className="sub-header-title">Additional Engineering &amp; Concurrency Projects</h3>
                    <p className="sub-header-desc">
                        Targeted implementations addressing concurrency locking, async thread execution, and full-stack services.
                    </p>
                </div>

                <div className="secondary-projects-grid">
                    {SECONDARY_PROJECTS.map((proj, idx) => (
                        <article
                            className="secondary-project-card reveal"
                            key={proj.title}
                            style={{ '--reveal-delay': `${idx * 0.06}s` }}
                        >
                            <div className="secondary-card-top">
                                <span className="project-num">PROJECT {proj.index}</span>
                                <span className="project-date">{proj.date}</span>
                            </div>

                            <h4 className="secondary-title">{proj.title}</h4>
                            <div className="secondary-subtitle">{proj.subtitle}</div>

                            <p className="secondary-summary">{proj.summary}</p>

                            <ul className="secondary-highlights">
                                {proj.highlights.map(hl => (
                                    <li key={hl} className="highlight-item">
                                        {hl}
                                    </li>
                                ))}
                            </ul>

                            <div className="secondary-card-bottom">
                                <div className="secondary-stack">
                                    {proj.stack.map(tech => (
                                        <span className="secondary-tech" key={tech}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={proj.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="secondary-link"
                                >
                                    <span>GitHub Repository →</span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* GitHub Profile Banner */}
            <div className="github-profile-banner reveal">
                <div className="banner-content">
                    <h4 className="banner-title">Explore More Repositories</h4>
                    <p className="banner-desc">
                        Over 50+ repositories covering Java Spring Boot backends, microservice pipelines, algorithms, and cross-platform prototypes on GitHub.
                    </p>
                </div>
                <a
                    href="https://github.com/tapan2004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-github-banner"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    <span>View GitHub Profile (50+ Repos)</span>
                </a>
            </div>
        </section>
    )
}
