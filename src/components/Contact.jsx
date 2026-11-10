import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const CONTACT_METHODS = [
    {
        label: 'Direct Email',
        value: 'tapanmanna.cs@gmail.com',
        href: 'mailto:tapanmanna.cs@gmail.com',
        external: false,
    },
    {
        label: 'LinkedIn Profile',
        value: 'linkedin.com/in/tapan-manna',
        href: 'https://linkedin.com/in/tapan-manna',
        external: true,
    },
    {
        label: 'GitHub Profile',
        value: 'github.com/tapan2004',
        href: 'https://github.com/tapan2004',
        external: true,
    },
    {
        label: 'Direct Phone',
        value: '+91-9749697174',
        href: 'tel:+919749697174',
        external: false,
    },
]

export default function Contact() {
    const ref = useReveal()

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const [status, setStatus] = useState('') // 'sending' | 'success' | 'error' | ''

    const handleChange = e =>
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))

    const handleSubmit = async e => {
        e.preventDefault()
        setStatus('sending')

        try {
            const baseUrl = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '')
            const endpoint = `${baseUrl}/api/contact`

            const res = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })

            if (!res.ok) {
                const errorText = await res.text()
                console.error('Server error response:', errorText)
                setStatus('error')
                return
            }

            const result = await res.json()

            if (result && result.success !== false) {
                setStatus('success')
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
            console.error('Submission network error:', err)
            setStatus('error')
        }
    }

    return (
        <section className="section-container" id="contact" ref={ref}>
            <div className="section-header reveal">
                <span className="section-eyebrow">// 07. CONTACT</span>
                <h2 className="section-heading">Let's Build Something Meaningful.</h2>
                <p className="section-subheading">
                    I'm interested in building scalable software, solving complex engineering problems and collaborating on meaningful technology projects.
                </p>
            </div>

            <div className="contact-editorial-layout">
                {/* Left Column: Direct Inquiries & Links */}
                <div className="contact-channel-info reveal">
                    <h3 className="channel-title">Direct Communication</h3>
                    <p className="channel-desc">
                        Whether you are discussing backend architecture, full-stack systems engineering, or technical leadership roles, feel free to reach out directly.
                    </p>

                    <div className="contact-cards-list">
                        {CONTACT_METHODS.map(method => (
                            <a
                                key={method.label}
                                href={method.href}
                                className="contact-method-card"
                                {...(method.external
                                    ? { target: '_blank', rel: 'noopener noreferrer' }
                                    : {}
                                )}
                            >
                                <div className="method-text">
                                    <span className="method-label">{method.label}</span>
                                    <span className="method-value">{method.value}</span>
                                </div>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="method-arrow" aria-hidden="true">
                                    <line x1="7" y1="17" x2="17" y2="7" />
                                    <polyline points="7 7 17 7 17 17" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Column: Ingestion Form */}
                <div className="contact-form-panel reveal" style={{ '--reveal-delay': '0.1s' }}>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group-row">
                            <div className="form-field">
                                <label htmlFor="contact-name" className="field-label">
                                    Your Name <span className="req">*</span>
                                </label>
                                <input
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    className="form-input"
                                    placeholder="e.g. John Doe"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="contact-email" className="field-label">
                                    Email Address <span className="req">*</span>
                                </label>
                                <input
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    className="form-input"
                                    placeholder="name@organization.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group-row">
                            <div className="form-field">
                                <label htmlFor="contact-phone" className="field-label">
                                    Phone Number (Optional)
                                </label>
                                <input
                                    id="contact-phone"
                                    name="phone"
                                    type="tel"
                                    className="form-input"
                                    placeholder="+1 (555) 000-0000"
                                    value={form.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="contact-subject" className="field-label">
                                    Subject <span className="req">*</span>
                                </label>
                                <input
                                    id="contact-subject"
                                    name="subject"
                                    type="text"
                                    className="form-input"
                                    placeholder="Software Engineering Collaboration"
                                    value={form.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-field">
                            <label htmlFor="contact-message" className="field-label">
                                Message <span className="req">*</span>
                            </label>
                            <textarea
                                id="contact-message"
                                name="message"
                                className="form-textarea"
                                placeholder="Describe the project, role, or technical requirements..."
                                rows="5"
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn-submit"
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? (
                                <span className="submit-loading">
                                    <span className="spinner" aria-hidden="true" />
                                    <span>Transmitting Message...</span>
                                </span>
                            ) : (
                                <span>Send Message →</span>
                            )}
                        </button>

                        {status === 'success' && (
                            <div className="form-feedback is-success" role="status">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span>Message transmitted successfully. I will get back to you shortly.</span>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="form-feedback is-error" role="alert">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="12" />
                                    <line x1="12" y1="16" x2="12.01" y2="16" />
                                </svg>
                                <span>Transmission could not be completed. Please email directly at tapanmanna.cs@gmail.com.</span>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}
