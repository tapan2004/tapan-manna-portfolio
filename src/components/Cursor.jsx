 import { useEffect, useRef } from 'react'

export default function Cursor() {
    const cursorRef = useRef(null)
    const followerRef = useRef(null)

    useEffect(() => {
        if (!window.matchMedia('(pointer: fine)').matches) return

        let mouseX = 0, mouseY = 0, fx = 0, fy = 0
        const cursor = cursorRef.current
        const follower = followerRef.current

        const onMove = (e) => {
            mouseX = e.clientX; mouseY = e.clientY
            cursor.style.left = mouseX + 'px'
            cursor.style.top  = mouseY + 'px'
        }
        document.addEventListener('mousemove', onMove)

        let raf
        const animate = () => {
            fx += (mouseX - fx) * 0.12
            fy += (mouseY - fy) * 0.12
            follower.style.left = fx + 'px'
            follower.style.top  = fy + 'px'
            raf = requestAnimationFrame(animate)
        }
        raf = requestAnimationFrame(animate)

        const grow = () => {
            cursor.style.transform = 'translate(-50%,-50%) scale(2.5)'
            cursor.style.background = 'transparent'
            cursor.style.border = '1px solid var(--accent)'
            follower.style.transform = 'translate(-50%,-50%) scale(0.5)'
        }
        const shrink = () => {
            cursor.style.transform = 'translate(-50%,-50%) scale(1)'
            cursor.style.background = 'var(--accent)'
            cursor.style.border = 'none'
            follower.style.transform = 'translate(-50%,-50%) scale(1)'
        }
        const targets = document.querySelectorAll('a, button, .pill, .about-card, .project-card, .ach-card')
        targets.forEach(el => { el.addEventListener('mouseenter', grow); el.addEventListener('mouseleave', shrink) })

        return () => {
            document.removeEventListener('mousemove', onMove)
            cancelAnimationFrame(raf)
            targets.forEach(el => { el.removeEventListener('mouseenter', grow); el.removeEventListener('mouseleave', shrink) })
        }
    }, [])

    return (
        <>
            <div className="cursor" ref={cursorRef} />
            <div className="cursor-follower" ref={followerRef} />
        </>
    )
}