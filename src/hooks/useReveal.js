import { useEffect, useRef } from 'react'

export default function useReveal(threshold = 0.12) {
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add('in-view')
            }),
            { threshold }
        )
        const els = ref.current?.querySelectorAll('.reveal')
        els?.forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [threshold])

    return ref
}