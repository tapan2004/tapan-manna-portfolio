import { useEffect, useRef } from 'react'

export default function Education() {
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
        <section className="section-pad" id="education" ref={sectionRef}>
            <div className="section-tag reveal">// 06 — education</div>
            <div className="section-title reveal">Academic <em>Background</em></div>
            <div className="edu-card reveal" style={{ '--reveal-delay': '0.1s' }}>
                <div className="edu-left">
                    <div className="edu-degree">
                        Bachelor of Technology<br />Computer Science &amp; Engineering
                    </div>
                    <div className="edu-uni">Sister Nivedita University</div>
                    <div className="edu-location">📍 Kolkata, West Bengal, India</div>
                </div>
                <div className="edu-right">
                    <div className="edu-period">AUG 2022 – JUNE 2026</div>
                    <div className="edu-badge">Graduated</div>
                </div>
            </div>
        </section>
    )
}