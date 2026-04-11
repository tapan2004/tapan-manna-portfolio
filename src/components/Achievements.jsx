import { useEffect, useRef } from 'react'

const ACHIEVEMENTS = [
    {
        org: 'HackerRank',
        title: '5-Star Java Badge',
        desc: 'Earned the top-level badge in Java programming, demonstrating advanced proficiency across core Java concepts and problem-solving.',
        date: 'MARCH 2024',
    },
    {
        org: 'Amazon',
        title: 'Junior Software Developer',
        desc: "Completed Amazon's training program in backend development and Java fundamentals, covering industry practices in software engineering.",
        date: 'JANUARY 2026',
    },
    {
        org: 'Board Infinity',
        title: 'Data Structures & Backend with Java',
        desc: 'Gained hands-on proficiency in Spring Boot, JDBC, JPA, Hibernate, and RESTful API development through structured coursework.',
        date: 'JUNE 2025',
    },
]

export default function Achievements() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add('in-view')
            }),
            { threshold: 0.15 }
        )
        const els = sectionRef.current?.querySelectorAll('.reveal')
        els?.forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <section className="section-pad alt-bg" id="achievements" ref={sectionRef}>
            <div className="section-tag reveal">// 05 — achievements</div>
            <div className="section-title reveal">Certifications &amp; <em>Recognition</em></div>
            <div className="ach-grid">
                {ACHIEVEMENTS.map((a, i) => (
                    <div
                        className="ach-card reveal"
                        key={a.title}
                        style={{ '--reveal-delay': `${i * 0.1}s` }}
                    >
                        <div className="ach-org">{a.org}</div>
                        <div className="ach-title">{a.title}</div>
                        <div className="ach-desc">{a.desc}</div>
                        <div className="ach-date">{a.date}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}