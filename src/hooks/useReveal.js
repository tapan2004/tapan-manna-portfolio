import { useEffect, useRef } from 'react'

export default function useReveal(threshold = 0.1) {
    const ref = useRef(null)

    useEffect(() => {
        if (!ref.current) return

        // Respect prefers-reduced-motion
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReduced) {
            const els = ref.current.querySelectorAll('.reveal')
            els.forEach(el => el.classList.add('in-view'))
            if (ref.current.classList.contains('reveal')) {
                ref.current.classList.add('in-view')
            }
            return
        }

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        e.target.classList.add('in-view')
                        observer.unobserve(e.target)
                    }
                })
            },
            { threshold, rootMargin: '0px 0px -40px 0px' }
        )

        const els = ref.current.querySelectorAll('.reveal')
        els.forEach(el => observer.observe(el))
        if (ref.current.classList.contains('reveal')) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [threshold])

    return ref
}
