import useReveal from '../hooks/useReveal'

const GROUPS = [
    { title: '// Primary Language',       pills: [{ label: '☕ Java', cls: 'p-green' }, { label: 'SQL', cls: 'p-green' }] },
    { title: '// Frameworks & Libraries', delay: '0.05s', pills: ['Spring Boot','Spring Security','Spring Data JPA','Angular','Next.js','Spring MVC','JPA / Hibernate','RESTful APIs','JWT Auth','FastAPI','Spring Scheduler','JavaMailSender'].map(l => ({ label: l, cls: 'p-cyan' })) },
    { title: '// Databases',              delay: '0.1s',  pills: ['MySQL','PostgreSQL','MongoDB','Oracle'].map(l => ({ label: l, cls: '' })).concat([{ label: 'Redis', cls: 'p-orange' }]) },
    { title: '// DevOps & Tools',         delay: '0.15s', pills: [{ label: 'Docker', cls: 'p-orange' }, ...['Git / GitHub', 'Git CLI', 'Maven','Postman','Swagger','Cloudinary'].map(l => ({ label: l, cls: '' }))] },
    // { title: '// ML & Data Science',      delay: '0.2s',  pills: ['Scikit-Learn','Facebook Prophet','Apriori Algorithm','Python'].map(l => ({ label: l, cls: '' })) },
    { title: '// Security',               delay: '0.25s', pills: ['OWASP Top 10','Burp Suite','Kali Linux','API Security Testing'].map(l => ({ label: l, cls: '' })) },
    { title: '// Core CS',                delay: '0.3s',  pills: ['OOP','DBMS','Operating Systems','Computer Networks','Data Structures','Agile'].map(l => ({ label: l, cls: '' })) },
]

export default function Skills() {
    const ref = useReveal()
    return (
        <section className="section-pad" id="skills" ref={ref}>
            <div className="section-tag reveal">// 02 — skills</div>
            <div className="section-title reveal">Tech <em>Stack</em></div>
            <div className="skills-container">
                {GROUPS.map(g => (
                    <div className="skill-group reveal" key={g.title} style={g.delay ? { '--reveal-delay': g.delay } : {}}>
                        <div className="sg-title">{g.title}</div>
                        <div className="pills">
                            {g.pills.map(p => (
                                <span className={`pill ${p.cls}`} key={p.label}>{p.label}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}