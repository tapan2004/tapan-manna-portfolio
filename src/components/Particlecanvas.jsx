import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let particles = []
        let raf

        const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
        resize()
        window.addEventListener('resize', resize)

        for (let i = 0; i < 70; i++) particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: Math.random() * 1.5 + 0.3,
            alpha: Math.random() * 0.4 + 0.05,
            color: Math.random() > 0.6 ? '74,222,128' : Math.random() > 0.5 ? '34,211,238' : '255,255,255'
        })

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach(p => {
                p.x += p.vx; p.y += p.vy
                if (p.x < 0) p.x = canvas.width
                if (p.x > canvas.width) p.x = 0
                if (p.y < 0) p.y = canvas.height
                if (p.y > canvas.height) p.y = 0
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(${p.color},${p.alpha})`
                ctx.fill()
            })
            raf = requestAnimationFrame(draw)
        }
        draw()

        return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(raf) }
    }, [])

    return <canvas id="particleCanvas" ref={canvasRef} />
}