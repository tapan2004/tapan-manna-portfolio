import { useEffect, useRef, useState } from 'react'

function useTyping(phrases) {
    const [text, setText] = useState('')
    const state = useRef({ phraseIdx: 0, charIdx: 0, deleting: false })

    useEffect(() => {
        let timer
        const tick = () => {
            const { phraseIdx, deleting } = state.current
            const phrase = phrases[phraseIdx]
            if (!deleting) {
                state.current.charIdx++
                setText(phrase.slice(0, state.current.charIdx))
                if (state.current.charIdx === phrase.length) {
                    state.current.deleting = true
                    timer = setTimeout(tick, 2200); return
                }
            } else {
                state.current.charIdx--
                setText(phrase.slice(0, state.current.charIdx))
                if (state.current.charIdx === 0) {
                    state.current.deleting = false
                    state.current.phraseIdx = (phraseIdx + 1) % phrases.length
                }
            }
            timer = setTimeout(tick, deleting ? 45 : 80)
        }
        timer = setTimeout(tick, 80)
        return () => clearTimeout(timer)
    }, [])

    return text
}

function useCountUp(target, duration = 1600) {
    const [count, setCount] = useState(0)
    const observed = useRef(false)
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && !observed.current) {
                observed.current = true
                let start = 0
                const step = target / (duration / 16)
                const interval = setInterval(() => {
                    start = Math.min(start + step, target)
                    setCount(Math.floor(start))
                    if (start >= target) clearInterval(interval)
                }, 16)
            }
        }, { threshold: 0.5 })
        observer.observe(el)
        return () => observer.disconnect()
    }, [target, duration])

    return [count, ref]
}

export default function Hero() {
    const phrases = [
        'Software Engineering Intern @ Sunyam Software | B.Tech CS Graduate',
        'Immediate Joiner | Java Backend & Full-Stack Developer | Spring Boot | React',
        'Spring Boot Developer | Java Backend Developer | Available for Opportunities',
    ]
    const typed = useTyping(phrases)
    const [apis,  apisRef]  = useCountUp(15)
    const [vulns, vulnsRef] = useCountUp(10)
    const [projs, projsRef] = useCountUp(5)

    return (
        <section className="hero" id="home">
            <div className="hero-grid-bg" />
            <div className="hero-glow g1" />
            <div className="hero-glow g2" />
            <div className="hero-glow g3" />

            <div className="hero-content">
                {/* Left Side - Text Content */}
                <div className="hero-left">
                    {/* Typing tag */}
                    <div className="hero-tag anim" style={{ '--d': '0s' }}>
                        <span className="live-dot" />
                        <span>{typed}</span>
                        <span className="type-cursor">|</span>
                    </div>

                    {/* Name */}
                    <h1 className="hero-name anim" style={{ '--d': '0.15s' }}>
                        <span className="name-l1">TAPAN</span>
                        <span className="name-l2">MANNA</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="hero-subtitle anim" style={{ '--d': '0.3s' }}>
                        <strong>B.Tech Computer Science Graduate (2026)</strong> &amp;{' '}
                        <strong>Java Backend &amp; Full-Stack Developer</strong> with hands-on full-stack development experience as a Software Engineering Intern at Sunyam Software, specializing in Spring Boot, Angular, and Next.js.
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero-cta anim" style={{ '--d': '0.45s' }}>
                        <a href="#projects" className="btn-primary">
                            View Projects <span className="btn-arrow">↓</span>
                        </a>
                        <a href="#contact" className="btn-secondary">
                            Get In Touch <span className="btn-arrow">→</span>
                        </a>
                        <a
                            href="/Tapan_Manna_cv.pdf"
                            download="Tapan_Manna_cv.pdf"
                            className="btn-cv"
                            title="Download CV"
                        >
                            <span className="cv-icon">⬇</span>
                            Download CV
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="hero-stats anim" style={{ '--d': '0.6s' }}>
                        <div className="stat" ref={apisRef}>
                            <div className="stat-num">
                                <span className="count-up">{apis}</span>
                                <span className="accent-text">+</span>
                            </div>
                            <div className="stat-label">REST APIs Built</div>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat" ref={vulnsRef}>
                            <div className="stat-num">
                                <span className="count-up">{vulns}</span>
                                <span className="accent-text">+</span>
                            </div>
                            <div className="stat-label">Vulnerabilities Found</div>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat" ref={projsRef}>
                            <div className="stat-num">
                                <span className="count-up">{projs}</span>
                            </div>
                            <div className="stat-label">Projects Showcased</div>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat">
                            <div className="stat-num">
                                40<span className="accent-text">+</span>
                            </div>
                            <div className="stat-label">GitHub Repos</div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Photo */}
                <div className="hero-photo-container">
                    <div className="hero-photo-wrapper">
                        <img
                            src="Tapan Image.jpg"
                            alt="Tapan Manna - Java Backend Developer"
                            className="hero-photo"
                        />
                    </div>
                </div>
            </div>

            <div className="scroll-hint anim" style={{ '--d': '1s' }}>
                <span>Scroll</span>
                <div className="scroll-line" />
            </div>
        </section>
    )
}