import { useState, useEffect, useRef } from 'react'

const LINKS = [
    { icon: '✉️', label: 'Email',    val: 'mannatapan588@gmail.com', href: 'mailto:mannatapan588@gmail.com' },
    { icon: '🐙', label: 'GitHub',   val: 'github.com/tapan2004',    href: 'https://github.com/tapan2004', external: true },
    { icon: '💼', label: 'LinkedIn', val: 'linkedin.com/in/tapan-manna', href: 'https://linkedin.com/in/tapan-manna', external: true },
    { icon: '📱', label: 'Phone',    val: '+91-9749697174',           href: 'tel:+919749697174' },
]

export default function Contact() {
    const sectionRef = useRef(null)

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const [status, setStatus] = useState('')

    useEffect(() => {

        // test
        console.log("API URL:", import.meta.env.VITE_API_URL)

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

    const handleChange = e =>
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    const handleSubmit = async e => {
        e.preventDefault()
        // add test
        console.log("API URL:", import.meta.env.VITE_API_URL)

        setStatus('sending')

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })

            // Added safe error handling (no structural change)
            if (!res.ok) {
                const errorText = await res.text()
                console.error("Server error:", errorText)
                setStatus('error')
                return
            }

            const result = await res.json()

            if (result.success) {
                setStatus('success')

                // Reset form
                setForm({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                })

            } else {
                setStatus('error')
            }

        } catch (err) {
            console.error("Fetch error:", err)
            setStatus('error')
        }
    }

    return (
        <section className="section-pad" id="contact" ref={sectionRef}>

            <div className="section-tag reveal">
                // 07 — contact
            </div>

            <div className="contact-grid">

                {/* Left Side */}

                <div>

                    <div className="contact-heading reveal">
                        Let's Build<em>Together.</em>
                    </div>

                    <p
                        className="contact-subtext reveal"
                        style={{ '--reveal-delay': '0.1s' }}
                    >
                        I'm actively seeking Java Backend Developer roles.
                        If you're building something that demands solid
                        architecture, secure APIs, and scalable systems —
                        let's talk.
                    </p>

                    <div
                        className="contact-links reveal"
                        style={{
                            '--reveal-delay': '0.2s',
                            marginTop: '32px'
                        }}
                    >
                        {LINKS.map(l => (
                            <a
                                key={l.label}
                                href={l.href}
                                className="contact-link"
                                {...(l.external
                                        ? {
                                            target: '_blank',
                                            rel: 'noopener noreferrer'
                                        }
                                        : {}
                                )}
                            >
                                <div className="cl-left">

                                    <div className="cl-icon">
                                        {l.icon}
                                    </div>

                                    <div>

                                        <div className="cl-label">
                                            {l.label}
                                        </div>

                                        <div className="cl-val">
                                            {l.val}
                                        </div>

                                    </div>

                                </div>

                                <span className="cl-arrow">
                                    →
                                </span>

                            </a>
                        ))}
                    </div>

                </div>

                {/* Right Side — Form */}

                <form
                    className="contact-form reveal"
                    style={{ '--reveal-delay': '0.15s' }}
                    onSubmit={handleSubmit}
                >

                    <div className="form-row">

                        <input
                            name="name"
                            placeholder="Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            type="email"
                        />

                    </div>

                    <div className="form-row">

                        <input
                            name="phone"
                            placeholder="Phone (optional)"
                            value={form.phone}
                            onChange={handleChange}
                        />

                        <input
                            name="subject"
                            placeholder="Subject"
                            value={form.subject}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <textarea
                        name="message"
                        placeholder="Message"
                        value={form.message}
                        onChange={handleChange}
                        required
                    />

                    <button
                        type="submit"
                        className="form-submit"
                        disabled={status === 'sending'}
                    >
                        {status === 'sending'
                            ? 'Sending…'
                            : 'Send Message →'}
                    </button>

                    {status === 'success' && (
                        <p className="form-status success">
                            ✓ Message sent successfully!
                        </p>
                    )}

                    {status === 'error' && (
                        <p className="form-status error">
                            ✗ Failed to send. Please try again.
                        </p>
                    )}

                </form>
            </div>
        </section>
    )
}